const express = require('express');

const router = express.Router();
const habbitController = require('../controllers/habbitController');

// create new habits
router.post('/create-habbit', habbitController.createhabbit);

// change status of the habbits
router.get('/toggle-status', habbitController.toggleStatus);

// delete the habbits
router.get('/delete-habbit/:id', habbitController.deletehabbit);

// update habbits
router.post('/edit-habbit/:id', habbitController.edithabbit);

module.exports = router;