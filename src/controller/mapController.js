const User = require('../models/User');

async function showUsers(req, res) {
	const { lng, lat, maxDist } = req.query;
	const nearUsers = await User.find({
		
				location: {
					$near: {
					$maxDistance: 1000,
					$geometry: {
					 type: "Point",
					 coordinates: [lng, lat]
					}
					/* near: [+lng, +lat],
					distanceField: 'dist.calculated',
					maxDistance: +maxDist,
					spherical: true */
				},
			}},
	

		function(err, results) {
			results.map(
				user => (user.dist.calculated = user.dist.calculated/*  * 6.371 */)
			); // Distance from radians to kms

			res.json(results);
		}
	);
}

module.exports = { showUsers };
