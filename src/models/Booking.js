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
		type: String
	},
	endDate: {
		type: String
	},
	petsID: [
		{
			type: String
		}
	],
	rating: {
		type: Number
	},
	comment: {
		type: String
	}
});

module.exports = mongoose.model('bookings', BookingSchema);
