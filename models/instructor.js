const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  // role: {
  //   type: String,
  //   default: "admin",
  // },

  name: String,
  email: String,
  organization: String,
  avatar: String,
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Instructor', instructorSchema);