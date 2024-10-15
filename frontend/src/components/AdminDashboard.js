import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { getAllBookings } from '../api/parkingService';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [analyticsData, setAnalyticsData] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await getAllBookings();
                setBookings(data);
                generateAnalytics(data);
            } catch (err) {
                setError('Failed to fetch bookings');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const generateAnalytics = (data) => {
        const lotCount = data.reduce((acc, booking) => {
            acc[booking.lotNumber] = (acc[booking.lotNumber] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(lotCount);
        const bookingCounts = Object.values(lotCount);

        setAnalyticsData({
            labels,
            datasets: [
                {
                    label: 'Bookings per Lot',
                    data: bookingCounts,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
            ],
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <h2>Current Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Lot Number</th>
                            <th>Vehicle Type</th>
                            <th>Status</th>
                            <th>Booking Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.lotNumber}</td>
                                <td>{booking.vehicleType}</td>
                                <td>{booking.status}</td>
                                <td>{new Date(booking.bookingTime).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <h2>Analytics</h2>
            {analyticsData ? (
                <div style={{ width: '80%', margin: 'auto' }}>
                    <Bar data={analyticsData} />
                </div>
            ) : (
                <p>No analytics data available.</p>
            )}
        </div>
    );
};

export default AdminDashboard;
