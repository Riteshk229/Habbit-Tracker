const mongoose = require('mongoose');

// Create a habit schema
const habitSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    desc: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dates: [{
        date: String,
        complete: String
    }]
}, {
    timestamps: true,
})

// Creating new model and exporting it
const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;