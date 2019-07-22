const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		required: true,
		type: String
	},
	lastName: {
		required: true,
		type: String
	},
	userName: {
		required: true,
		type: String
	},
	passWord: {
		required: true,
		type: String
	},
	birthDate: {
		required: true,
		type: String
	},
	registerDate: {
		required: true,
		type: String
	},
	avatarURL: {
		required: true,
		type: String
	},
	description: {
		required: true,
		type: String
	},
	petPreferences: {
		required: true,
		type: [String]
	},
	coins: {
		required: true,
		type: Number
	},
	rating: {
		required: true,
		type: Number
	},
	adress: {
		country: {
			required: true,
			type: String
		},
		province: {
			required: true,
			type: String
		},
		adressLine: {
			required: true,
			type: String
		},
		coord: {
			required: true,
			type: String
		},
		postal: {
			required: true,
			type: Number
		},
		houseType: {
			required: true,
			type: String
		}
	},
	pets: [
		{
			chip: {
				required: true,
				type: String
			},
			name: {
				required: true,
				type: String
			},
			birthDate: {
				required: true,
				type: String
			},
			energy: {
				required: true,
				type: String
			},
			specie: {
				required: true,
				type: String
			},
			description: {
				required: true,
				type: String
			},
			picturesURL: {
				required: true,
				type: [String]
			}
		}
	],
	whiteList: [
		{
			startDate: {
				required: true,
				type: String
			},
			endDate: {
				required: true,
				type: String
			}
		}
	]
});

module.exports = mongoose.model('users', UserSchema);
