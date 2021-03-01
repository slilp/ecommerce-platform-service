const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = new FacebookStrategy({
    clientID: '160373278973087',
    clientSecret: '572d36f29895f05b75377a06592628f4',
    callbackURL: 'http://localhost:5000/api/customer/facebook/callback'
  }, function (accessToken, refreshToken, profile, done) {
    
    return done(null, profile);
  }
);