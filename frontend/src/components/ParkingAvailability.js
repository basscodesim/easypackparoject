import React, { useState, useEffect } from 'react';
import { getParkingAvailability } from '../api/parkingService';
import './ParkingAvailability.css';

const ParkingAvailability = () => {
  const [parkingLots, setParkingLots] = useState([]);
  const [vehicleType, setVehicleType] = useState('car');

  useEffect(() => {
    fetchParkingLots();
  }, [vehicleType]);

  const fetchParkingLots = async () => {
    try {
      const allParkingLots = await getParkingAvailability();
      const filteredLots = allParkingLots.filter(lot => lot.type === vehicleType);
      setParkingLots(filteredLots);
    } catch (error) {
      console.error('Error fetching parking availability:', error);
    }
  };

  return (
    <div className="parking-availability">
      <div className="availability-panel">
        <h2>Select Vehicle Type</h2>
        <div className="toggle-buttons">
          <button
            className={vehicleType === 'car' ? 'active' : ''}
            onClick={() => setVehicleType('car')}
          >
            Car
          </button>
          <button
            className={vehicleType === 'motor' ? 'active' : ''}
            onClick={() => setVehicleType('motor')}
          >
            Motor
          </button>
        </div>

        <div className="parking-lots-list">
          {parkingLots.length > 0 ? (
            parkingLots.map(lot => (
              <div key={lot.id} className="parking-lot">
                <p>{lot.name}</p>
                <p>Spaces available: {lot.availableSpaces}</p>
              </div>
            ))
          ) : (
            <p>No parking lots available for {vehicleType}s.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkingAvailability;
