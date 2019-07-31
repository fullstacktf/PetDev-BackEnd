const User = require('../models/User');

function showUsers(req, res, next) {

	User.aggregate([
        {
            $geoNear: {
                near: [ 11 , 12 ] ,
                distanceField: "dist.calculated",
                maxDistance: 1000000000,
                spherical: true                
            }
        }
    ],
	function(err, results) {
console.log(results)	}
)
}


module.exports = { showUsers };
