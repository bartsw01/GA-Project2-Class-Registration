const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    }

},

    {timestamps: true}
);







module.exports = mongoose.model('Location', locationSchema);