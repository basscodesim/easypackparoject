const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  parkingLotId: { type: mongoose.Schema.Types.ObjectId, ref: 'ParkingLot', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Create Booking model
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
