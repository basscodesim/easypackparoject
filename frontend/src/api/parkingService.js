import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this if your backend runs on a different port

// src/api/parkingService.js
export const getParkingAvailability = async () => {
    try {
      const response = await axios.get(`${API_URL}/parking/availability`);
      return response.data; // Ensure the backend sends data with 'type' field ('car' or 'motor')
    } catch (error) {
      console.error('Error fetching parking availability:', error);
      throw error;
    }
  };
  

// Book a parking spot
export const bookParking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_URL}/parking/book`, bookingData); // Ensure this path matches your backend route
        return response.data;
    } catch (error) {
        console.error('Error booking parking:', error);
        throw error;
    }
};

// Fetch all bookings
export const getAllBookings = async () => {
    try {
        const response = await axios.get('/api/bookings'); // Adjust this URL to match your backend endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error; // Re-throw the error so it can be handled in the component
    }
};

// Fetch all parking lots
export const getParkingLots = async () => {
    try {
        const response = await axios.get(`${API_URL}/parking-lots`); // Adjust with the correct endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching parking lots:', error);
        throw error;
    }
};

// Create a new parking lot
export const createParkingLot = async (parkingLotData) => {
    try {
        const response = await axios.post(`${API_URL}/parking-lots`, parkingLotData); // Adjust with the correct endpoint
        return response.data;
    } catch (error) {
        console.error('Error creating parking lot:', error);
        throw error;
    }
};

// Delete a parking lot
export const deleteParkingLot = async (lotNumber) => {
    try {
        await axios.delete(`${API_URL}/parking-lots/${lotNumber}`); // Adjust with the correct endpoint
    } catch (error) {
        console.error('Error deleting parking lot:', error);
        throw error;
    }
};

