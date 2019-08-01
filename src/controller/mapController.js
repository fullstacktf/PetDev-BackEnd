const User = require('../models/User');

function showUsers(req, res, next) {
	User.aggregate(
		[
			{
				$geoNear: {
					near: [-16.315813064575195, 28.48370514774725],
					distanceField: 'dist.calculated',
					maxDistance: 0.5,
					spherical: true
				}
			}
		],
		function(err, results) {
			res.json(results);
		}
	);
}

module.exports = { showUsers };
