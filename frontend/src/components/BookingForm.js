import React, { useState } from 'react';
import { bookParking } from '../api/parkingService';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleType, setVehicleType] = useState('car');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !time) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    try {
      await bookParking({ name, email, vehicleType, time });
      setSuccess('Booking successful!');
      setName('');
      setEmail('');
      setTime('');
    } catch (error) {
      setError('Failed to book parking. Please try again.');
    }
  };

  return (
    <div className="booking-form-wrapper">
      <div className="booking-form-container">
        <h2>Book Your Parking Spot</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicleType">Vehicle Type</label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Book Now</button>
            <button
              type="button"
              className="clear-btn"
              onClick={() => {
                setName('');
                setEmail('');
                setTime('');
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
