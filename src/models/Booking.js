const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
	_id: {
		required: true,
		type: String
	},
	hostUserID: {
		required: true,
		type: String
	},
	clientUserID: {
		required: true,
		type: String
	},
	startDate: {
		required: true,
		type: String
	},
	endDate: {
		required: true,
		type: String
	},
	petsID: [
		{
			required: true,
			type: String
		}
	],
	rating: {
		required: true,
		type: Number
	},
	comment: {
		required: true,
		type: String
	}
});

module.exports = mongoose.model('bookings', BookingSchema);
