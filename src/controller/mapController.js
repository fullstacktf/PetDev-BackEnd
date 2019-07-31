/* const User = require('../models/User');
 */
function showUsers(req, res) {
	const { lat, long, filter } = req.params;
	console.log(`Lat: ${lat} | Long: ${long} | ${filter}`);
	res.send(req.params);
}
/* 	const users = await User.find();
	console.log(users);
	res.json(users);
} */
module.exports = { showUsers };
