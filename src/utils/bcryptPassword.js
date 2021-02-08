const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashResult = await bcrypt.hash(password, salt);
    return hashResult;
}

async function verifyPassword(passwordVerify, hashPassword) {
    const isCorrectPassword = await bcrypt.compareSync(passwordVerify, hashPassword);
    return isCorrectPassword;
}

module.exports = {
    hashPassword ,
    verifyPassword
}