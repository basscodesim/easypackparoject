const mongoose = require('mongoose');
const ParkingLot = require('../models/ParkingLot'); // Adjust the path as necessary
const DB_URI = 'mongodb+srv://charlescollantespersonal:Charles2004@cluster0.9tda6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string

const seedParkingLots = async () => {
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Parking lot data with all required fields
        const parkingLots = [
            {
                name: 'Lot A',
                type: 'car',
                lotNumber: 'A1',
                isAvailable: true,
                capacity: 10,            // Required field
                availableSpaces: 10,     // Required field
                location: 'Location A'    // Required field
            },
            {
                name: 'Lot M',
                type: 'motorcycle',
                lotNumber: 'M1',
                isAvailable: true,
                capacity: 5,              // Required field
                availableSpaces: 5,       // Required field
                location: 'Location M'     // Required field
            }
        ];

        await ParkingLot.insertMany(parkingLots);
        console.log('Parking lots seeded successfully!');
    } catch (error) {
        console.error('Error seeding parking lots:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedParkingLots();
