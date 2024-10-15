const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const { parkingLotId, startTime, endTime } = req.body;
    const newBooking = new Booking({
      parkingLotId,
      startTime,
      endTime,
    });
    
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all bookings
router.get('/bookings', async (req, res) => {
  try {
      const bookings = await Booking.find();
      res.json(bookings);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching bookings' });
  }
});

module.exports = router;
