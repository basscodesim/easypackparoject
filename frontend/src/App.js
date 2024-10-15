import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import BookingForm from './components/BookingForm';
import ParkingAvailability from './components/ParkingAvailability';
import Homepage from './components/Homepage';


function App() {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
		        <Route path="/book" element={<BookingForm />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/availability" element={<ParkingAvailability />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Router>
        
    );
}

export default App;