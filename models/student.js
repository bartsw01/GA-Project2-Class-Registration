var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var studentSchema = new Schema({
  name: String,
  email: String,
  // cohort: String,
  // avatar: String,
  // courses: [{type: Schema.Types.ObjectId, ref: "Course"}],
  // googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);