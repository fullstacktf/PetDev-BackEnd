const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

const passport = require('passport');

router.get('/', userController.showAll);

router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    passReqToCallback: true
}));

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signin',
    passReqToCallback: true
}));

router.get('/profile', isAuthenticated ,(req, res, next) => {
    res.render('profile');
});

router.get('/home', (req, res, next) => {
    res.render('index');
});

router.get('/logout', (req, res, next) => {
    req.logOut();
    res.redirect('home')
});


function isAuthenticated (req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('home');
}

module.exports = router;
