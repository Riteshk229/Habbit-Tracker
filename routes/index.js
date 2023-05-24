const express = require('express');

const router = express.Router();

//Importing home controller
const homeController = require('../controllers/homeController');

router.get('/',homeController.home);

// Redirecting to User routes
router.use('/user',require('./user'));

module.exports = router;