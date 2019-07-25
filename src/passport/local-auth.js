const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((id, done) => {
    const user =  await User.findById(id);
    done(null, user);
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = new User();
    user.email = email;
    user.password = password;
    await user.save();
    done(null, user);
}))