const User = require('../models/User');

function showUsers(req, res, next) {
	const { lng, lat, maxDist } = req.query;
	console.log(lng, lat, maxDist);
	User.aggregate(
		[
			{
				$geoNear: {
					near: [+lng, +lat],
					distanceField: 'dist.calculated',
					maxDistance: +maxDist,
					spherical: true
				}
			}
		],
		function (err, results) {
			results.map(user => user.dist.calculated = user.dist.calculated * 6.371); // Distance from radians to kms
			res.json(results);
		}
	);
}

module.exports = { showUsers };
