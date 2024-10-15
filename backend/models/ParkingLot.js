const mongoose = require('mongoose');

const parkingLotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  availableSpaces: { type: Number, required: true },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Create Parking Lot model
const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;
