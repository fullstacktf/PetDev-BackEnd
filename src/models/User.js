const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const GeoSchema = new Schema({
	type: {
		type: String,
		default: 'Point'
	},
	coordinates: {
		type: [Number],
		index: '2dsphere'
	}
});

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
	houseType: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	birthDate: {
		type: Date
	},
	registerDate: {
		type: Date
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
	createdAt: {
		type: Date
	},
	updateAt: {
		type: Date
	},
	messages: [
		{
			text: {
				type: String
			},
			fromUserID: {
				type: String
			},
			sentDate: {
				type: Date
			},
			readMessage: {
				type: Boolean
			},
			bookingID: {
				type: String
			}
		}
	],

	geo: GeoSchema,

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
		postal: {
			type: Number
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
				type: Date
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
	]
});

UserSchema.methods.encryptPassword = password => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', UserSchema);
