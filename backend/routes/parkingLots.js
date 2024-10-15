const express = require('express');
const ParkingLot = require('../models/ParkingLot');
const router = express.Router();

// Create a new parking lot
router.post('/', async (req, res) => {
  try {
    const newParkingLot = new ParkingLot(req.body);
    await newParkingLot.save();
    res.status(201).json(newParkingLot);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all parking lots
router.get('/', async (req, res) => {
  try {
    const parkingLots = await ParkingLot.find();
    res.status(200).json(parkingLots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
