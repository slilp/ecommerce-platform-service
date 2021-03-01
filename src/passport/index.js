const passport = require('passport');
const jwt = require('./jwt');
const facebook = require('./facebook');

passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(jwt);
passport.use(facebook);


module.exports = passport;