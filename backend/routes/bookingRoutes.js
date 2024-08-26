const express = require('express');
const { bookRoom, getBookings } = require('../controllers/bookingController');
const router = express.Router();

router.post('/book', bookRoom);
router.get('/', getBookings);

module.exports = router;
