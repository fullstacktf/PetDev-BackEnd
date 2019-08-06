const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
	hostUserID: {
		type: String
	},
	clientUserID: {
		type: String
	},
	startDate: {
		type: Date
	},
	endDate: {
		type: Date
	},
	petsID: [
		{
			type: String
		}
	],
	createdAt: {
		type: Date
	},
	updatedAt: {
		type: Date
	},
	comment: {
		type: String
	},
	rating: {
		type: Number
	}
});

module.exports = mongoose.model('bookings', BookingSchema);
