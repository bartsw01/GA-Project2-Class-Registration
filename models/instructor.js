const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Instructor', instructorSchema);