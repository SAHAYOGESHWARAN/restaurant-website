const express = require('express');
const { getGallery } = require('../controllers/galleryController');
const router = express.Router();

router.get('/', getGallery);

module.exports = router;
