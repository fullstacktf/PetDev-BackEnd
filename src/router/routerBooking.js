const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.get('/', bookingController.showAll);
router.get('/:id', bookingController.findById);
router.post('/', bookingController.addBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
