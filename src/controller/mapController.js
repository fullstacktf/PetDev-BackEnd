const User = require('../models/User');

async function showUsers(req, res) {
	/*const { lat, long, filter } = req.params;
	let bestUsers = {};
	console.log(`Lat: ${lat} | Long: ${long} | ${filter}`);
	
	 	switch (filter) {
	case 'rating':
		bestUsers = await User.find({})
			.sort({ rating: 'desc' })
			.exec();
		break;
	case 'near':
		bestUsers = await User.find({})
			.sort({ rating: 'desc' })
			.exec();
		break;
	default:
		res.send('Error en la consulta a BBDD');
		break;
	} */
	User.geoNear(
		{type: }
	);

	res.send(bestUsers);
}

module.exports = { showUsers };
