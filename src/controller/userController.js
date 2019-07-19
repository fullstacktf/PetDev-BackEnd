const User = require('../model/User');

async function showAll(req, res) {
	const users = await User.find();
	console.log(users);
	res.json(users);
}

module.exports = { showAll };
