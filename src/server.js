const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

const routerUser = require('./router/routerUser.js');
const routerBooking = require('./router/routerBooking.js');
const routerMap = require('./router/routerMap.js');

const app = express();

app.use(express.json());
const corsOptions = {
	origin: 'http://localhost'
}
app.use(cors(corsOptions));

//CORS Header
/* app.all('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	next();
}); */

// Connection to DB

mongoose
	.connect('mongodb://159.65.59.55/petdev', { useNewUrlParser: true })
	.then(console.log('DB connection was successful'))
	.catch(err => console.log(err));

// Settings

// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

// Middlewares

app.use(morgan('dev'));

// Importing the routes

app.use('/users', routerUser);
app.use('/bookings', routerBooking);
app.use('/map', routerMap);

// Run the server

app.listen(3000, () => console.log(`Server on port ${port}`));
