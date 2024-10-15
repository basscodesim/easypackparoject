const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes

// Import models
const User = require('./models/User');
const ParkingLot = require('./models/ParkingLot');
const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://charlescollantespersonal:Charles2004@cluster0.9tda6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Import routes
const userRoutes = require('./routes/users');
const parkingLotRoutes = require('./routes/parkingLots');
const bookingRoutes = require('./routes/bookings');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/parking-lots', parkingLotRoutes);
app.use('/api/bookings', bookingRoutes);
