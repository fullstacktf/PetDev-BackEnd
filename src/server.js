const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const engine = require('ejs-mate');
const path = require('path');
const passport = require('passport');
//const passportLocal = require('passport-local');
const session = require('express-session');
const flash = require('connect-flash');

const cors = require('cors');

const routerUser = require('./router/routerUser.js');
const routerBooking = require('./router/routerBooking.js');
const routerMap = require('./router/routerMap.js');

//initialization
const app = express();
const __dirname = path.resolve();
require('./passport/local-auth');

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cors());

// Connection to DB

mongoose
	.connect('mongodb://159.65.59.55/petdev', { useNewUrlParser: true })
	.then(console.log('DB connection was successful'))
	.catch(err => console.log(err));

// Settings

// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 3001);
const port = app.get('port');

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: 'mysecrectsession',
		resave: false,
		saveUninitialized: false
	})
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	app.locals.signupMessage = req.flash('signupMessage');
	app.locals.signinMessage = req.flash('signinMessage');
	app.locals.user = req.user;
	next();
});

// Importing the routes

app.use('/api/users', routerUser);
app.use('/api/bookings', routerBooking);
app.use('/api/map', routerMap);

// Run the server

app.listen(port, () => console.log(`Server on port ${port}`));
