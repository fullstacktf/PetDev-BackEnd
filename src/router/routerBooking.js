const express = require('express');
const { check } = require('express-validator/check');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.get('/', bookingController.showAll);
router.get('/:id', bookingController.findById);
router.post(
	'/',
	[
		check('hostUserID').isEmpty(),
		check('clientUserID').isEmpty(),
		check('startDate').isEmpty(),
		check('endDate').isEmpty(),
		check('rating').isNumeric()
	],
	bookingController.addBooking
);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
