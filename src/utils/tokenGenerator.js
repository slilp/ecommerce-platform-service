const jwt = require('jsonwebtoken');

function tokenGenerator(load) {
    const payload = {
        customerId : load.customerId,
        firstName : load.firstName,
        lastName : load.lastName
    }

    const privateKey = process.env.ACCESS_KEY || '';

    const option = {
        expiresIn: 3600
    };

    return jwt.sign(payload, privateKey, option);
}

module.exports = {
    tokenGenerator
}