const mongoose = require('mongoose');

// Create a habbit schema
const habbitSchema = new mongoose.Schema({
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
const Habbit = mongoose.model('Habbit', habbitSchema);
module.exports = Habbit;