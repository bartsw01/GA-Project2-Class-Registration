const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  
    title: {
        type: String,
        // enum: ['Intro to JavaScript', 'Minecraft Mods with Java', 'Website Design', ]
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
    }
},

    {timestamps: true}
);

module.exports = mongoose.model('Course', courseSchema);