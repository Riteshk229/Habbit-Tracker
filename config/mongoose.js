const mongoose = require('mongoose');

// Connects to Atlas
mongoose.connect('mongodb+srv://Riteshk229:9693640242@cluster0.lucaj3w.mongodb.net/Tracker?retryWrites=true&w=majority');

// check for connection
const db = mongoose.connection;

// If not connected
db.on('error',console.error.bind(console,"Error on connecting to db"));

// if connected
db.once('open',function(){
    console.log("Connected to Database :: MondoDB");
});

// exports database
module.exports = db;