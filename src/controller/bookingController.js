const Booking = require('../models/Booking');

async function showAll(req, res) {
	const bookings = await Booking.find();
	console.log(bookings);
	res.json(bookings);
}

async function findById(req, res) {
	const id = req.params.id;
	const foundUser = await Booking.findById(id);
	res.json(foundUser);
}

async function updateBooking(req, res) {
	const id = req.params.id;
	const updatedUser = await Booking.findByIdAndUpdate(id, req.body, {
		new: true
	});
	console.log(req.body);
	res.json(updatedUser);
}

async function addBooking(req, res) {
	const newBooking = new Booking(req.body);
	await newBooking.save();
	console.log(newBooking);
	res.json(newBooking);
}

async function deleteBooking(req, res) {
	const id = req.params.id;
	console.log(req.params.id);
	await Booking.findByIdAndRemove(id);
	res.json(id);
}

module.exports = {
	showAll,
	findById,
	updateBooking,
	addBooking,
	deleteBooking
};
