const passport = require('passport');

module.exports.jwtAuthentication =  passport.authenticate('jwt', { session: false });

