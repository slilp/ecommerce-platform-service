const passport = require('passport');

module.exports.jwtAuthentication =  passport.authenticate('jwt', { session: false });

module.exports.facebookAuthentication =  passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
});

module.exports.facebookCallback = passport.authenticate('facebook', {
    successRedirect: '/api/customer/facebook/login'
});