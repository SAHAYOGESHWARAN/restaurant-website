const express = require('express');
const { getRooms } = require('../controllers/roomController');
const router = express.Router();

router.get('/', getRooms);

module.exports = router;
