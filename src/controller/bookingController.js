const Booking = require('../model/Booking');

async function showAll(req, res) {
	const bookings = await Booking.find();
	console.log(bookings);
	res.json(bookings);
}

module.exports = { showAll };
