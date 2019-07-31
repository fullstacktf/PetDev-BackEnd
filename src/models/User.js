const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String
	},
	lastName: {
		type: String
	},
	userName: {
		type: String
	},
	email: {
		type: String
	},
	passWord: {
		type: String
	},
	birthDate: {
		type: String
	},
	registerDate: {
		type: String
	},
	avatarURL: {
		type: String
	},
	description: {
		type: String
	},
	petPreferences: {
		type: [String]
	},
	coins: {
		type: Number
	},
	rating: {
		type: Number
	},
	address: {
		country: {
			type: String
		},
		province: {
			type: String
		},
		adressLine: {
			type: String
		},
		geo: {
			type: {
				type: String,
				enum: ['Point']
			},
			coordinates: {
				type: [Number]
			}
		},
		postal: {
			type: Number
		},
		houseType: {
			type: String
		}
	},
	pets: [
		{
			chip: {
				type: String
			},
			name: {
				type: String
			},
			birthDate: {
				type: String
			},
			energy: {
				type: String
			},
			specie: {
				type: String
			},
			description: {
				type: String
			},
			picturesURL: {
				type: [String]
			}
		}
	],
	whiteList: [
		{
			startDate: {
				type: String
			},
			endDate: {
				type: String
			}
		}
	]
});

module.exports = mongoose.model('users', UserSchema);
