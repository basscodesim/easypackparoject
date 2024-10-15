const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Consider hashing passwords for security
}, {
  timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
