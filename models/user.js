const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
    name :{ 
        type : String,
        required : true,
    },
    email : {
        type :String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true
    }
},{
    timestamps: true,
});

// Creating new model and exporting it
const User = mongoose.model('User',userSchema);

module.exports = User;