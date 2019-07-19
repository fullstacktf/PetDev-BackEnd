const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.get('/', bookingController.showAll);

module.exports = router;
