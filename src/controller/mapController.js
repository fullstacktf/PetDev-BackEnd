const User = require('../models/User');

function showUsers(req, res) {
	User.aggregate(
		[
			{
				$geoNear: {
					near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
					distanceField: 'dist.calculated',
					maxDistance: 10,
					spherical: true
				}
			}
		],
		function(err, results) {
			/* res.json(results); */
			console.log(
				results.map(home => Math.ceil(home.dist.calculated / 10)) + ' km '
			);
			res.json(results);
		}
	);
}

module.exports = { showUsers };
