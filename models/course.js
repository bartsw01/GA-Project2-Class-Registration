const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courseSchema = new Schema({
  
    title: {
        type: String,
        // enum: ['Intro to JavaScript', 'Minecraft Mods with Java', 'Website Design', ]
        required: true
    },

    dayOfWeek: {
        type: String,
        enum: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri']
    },

    noOfWeeks: {
        type: Number,
        min: 1,
        max: 52,
    },

    courseNo: {
        type: Number,
        min: 100,
        max: 9999, 
    },

    startDate: {
        type: Date
    },

    instructor: {
        type: Schema.Types.ObjectId, 
        ref: 'Instructor'
    },

    location: {
        type: Schema.Types.ObjectId, 
        ref: 'Location'
    }

},

    {timestamps: true}
);

module.exports = mongoose.model('Course', courseSchema);