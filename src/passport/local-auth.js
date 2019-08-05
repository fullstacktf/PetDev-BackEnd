const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
	done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

passport.use(
	'local-signup',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		async (req, email, password, done) => {
			const userEmail = await User.findOne({ email: email });
			console.log(userEmail);
			if (userEmail) {
				return done(
					null,
					false,
					req.flash('signupMessage', 'The Email is alredy taken')
				);
			} else {
				const newUser = new User();
				newUser.name = req.body.name;
				newUser.lastName = req.body.lastName;
				newUser.userName = req.body.userName;
				newUser.email = email;
				newUser.password = newUser.encryptPassword(password);
				newUser.birthDate = req.body.userDate;
				newUser.registerDate = new Date();
				await newUser.save();
				done(null, newUser);
			}
		}
	)
);

passport.use(
	'local-signin',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		async (req, email, password, done) => {
			const user = await User.findOne({ email: email });
			if (!user) {
				return done(null, false, req.flash('signinMessage', 'No user found'));
			}
			if (!user.comparePassword(password)) {
				return done(
					null,
					false,
					req.flash('signinMessage', 'Incorret Password')
				);
			}

			done(null, user);
		}
	)
);
