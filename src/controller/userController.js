const User = require('../models/User');

async function showAll(req, res) {
	const users = await User.find();
	console.log(users);
	res.json(users);
}

async function findById(req, res) {
	const id = req.params.id;
	const foundUser = await User.findById(id);
	res.json(foundUser);
}

async function updateUser(req, res) {
	const id = req.params.id;
	const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
	console.log(req.body);
	res.json(updatedUser);
}

async function addUser(req, res) {
	const newUser = new User(req.body);
	newUser.save();
	res.json(newUser);
}

async function deleteUser(req, res) {
	const id = req.params.id;
	console.log(req.params.id);
	await User.findByIdAndRemove(id);
	res.json(id);
}

module.exports = { showAll, findById, updateUser, addUser, deleteUser };
