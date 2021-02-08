// const customerService = require('../services/customerService');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "ECOMCAMP"
}


module.exports = new JwtStrategy(opts,async function(jwt_payload, done) {

    const q = jwt_payload.customerId;

    // const targetUser = await customerService.getUserById(q);

    if(q){
        return done(null, q);
    }else{
        return done(null,false);
    }
});