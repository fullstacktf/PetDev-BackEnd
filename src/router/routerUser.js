const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const cors = require('cors');

const passport = require('passport');

var corsOptions = {
	origin: 'http://fanimals.me',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.get('/', cors(corsOptions), userController.showAll);
router.get('/:id', cors(corsOptions), userController.findById);
router.post('/', cors(corsOptions), userController.addUser);
router.put('/:id', cors(corsOptions), userController.updateUser);
router.delete('/:id', cors(corsOptions), userController.deleteUser);

router.get('/signup', (req, res) => {
	res.render('signup');
});

router.post(
	'/signup',
	passport.authenticate('local-signup', {
		successRedirect: '/users/profile',
		failureRedirect: '/users/signup',
		passReqToCallback: true
	})
);

router.get('/signin', (req, res) => {
	res.render('signin');
});

router.post(
	'/signin',
	passport.authenticate('local-signin', {
		successRedirect: '/users/profile',
		failureRedirect: '/users/signin',
		passReqToCallback: true
	})
);

router.get('/profile', isAuthenticated, (req, res) => {
	res.render('profile');
});

router.get('/home', (req, res) => {
	res.render('index');
});

router.get('/logout', (req, res) => {
	req.logOut();
	res.redirect('home');
});

function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('home');
}

module.exports = router;
