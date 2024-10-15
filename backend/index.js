const mongoose = require('mongoose');
const User = require('./models/User');
const ParkingLot = require('./models/ParkingLot');
const Booking = require('./models/Booking');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://charlescollantespersonal:Charles2004@cluster0.9tda6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to the database.');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from the database.');
  });