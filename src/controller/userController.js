const User = require('../model/User');

async function showAll(req, res) {
	const users = await User.find();
	res.json(users);
}

module.exports = { showAll };
