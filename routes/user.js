const express = require('express');

const router = express.Router();
const passport = require('passport');

//Importing User controller
const userController = require('../controllers/userController');

// Create new user
router.post('/create',userController.create);

//Redirect to sign-up page
router.get('/sign-up',userController.signUP);
//Redirect to sign-in page
router.get('/sign-in',userController.signIN);

// Log-in user
router.post('/create-session',passport.authenticate('local',{
    failureRedirect: '/user/sign-in'
}),userController.createSession);

// Sign-out User
router.get('/sign-out',userController.destroySession);

// Reirect and send a password reset email
router.get('/forgot',userController.forgetPasswordPage);

// Redirect to habbit routes
router.use('/habbit',require('./habbit'));

// To render new habbit page
router.get('/addHabbits',userController.add);


module.exports = router;