import './AdminDashboard.css';
import React, { useEffect, useState } from 'react';
import { getParkingLots, createParkingLot, deleteParkingLot } from '../api/parkingService';

const ManageParkingLots = () => {
    const [parkingLots, setParkingLots] = useState([]);
    const [newParkingLot, setNewParkingLot] = useState({ type: '', lotNumber: '', capacity: '', availableSpaces: '', location: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchParkingLots = async () => {
            try {
                const data = await getParkingLots();
                setParkingLots(data);
            } catch (err) {
                setError('Failed to fetch parking lots');
            }
        };

        fetchParkingLots();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewParkingLot({ ...newParkingLot, [name]: value });
    };

    const handleAddParkingLot = async () => {
        try {
            await createParkingLot(newParkingLot);
            setNewParkingLot({ type: '', lotNumber: '', capacity: '', availableSpaces: '', location: '' });
            const data = await getParkingLots();
            setParkingLots(data);
        } catch (err) {
            setError('Failed to add parking lot');
        }
    };

    const handleDeleteParkingLot = async (lotNumber) => {
        try {
            await deleteParkingLot(lotNumber);
            const data = await getParkingLots();
            setParkingLots(data);
        } catch (err) {
            setError('Failed to delete parking lot');
        }
    };

    return (
        <div className="manage-parking-lots">
            <h2>Manage Parking Lots</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <h3>Add New Parking Lot</h3>
                <input type="text" name="type" placeholder="Type" value={newParkingLot.type} onChange={handleInputChange} />
                <input type="text" name="lotNumber" placeholder="Lot Number" value={newParkingLot.lotNumber} onChange={handleInputChange} />
                <input type="number" name="capacity" placeholder="Capacity" value={newParkingLot.capacity} onChange={handleInputChange} />
                <input type="number" name="availableSpaces" placeholder="Available Spaces" value={newParkingLot.availableSpaces} onChange={handleInputChange} />
                <input type="text" name="location" placeholder="Location" value={newParkingLot.location} onChange={handleInputChange} />
                <button onClick={handleAddParkingLot}>Add Parking Lot</button>
            </div>
            <h3>Existing Parking Lots</h3>
            {parkingLots.length === 0 ? (
                <p>No parking lots available.</p>
            ) : (
                <ul>
                    {parkingLots.map((lot) => (
                        <li key={lot.lotNumber}>
                            {lot.type} - {lot.lotNumber} - {lot.capacity} - {lot.availableSpaces} - {lot.location}
                            <button onClick={() => handleDeleteParkingLot(lot.lotNumber)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ManageParkingLots;
