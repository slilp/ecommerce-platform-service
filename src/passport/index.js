const passport = require('passport');
const jwt = require('./jwt');

passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(jwt);


module.exports = passport;