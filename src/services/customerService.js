const db = require('../models');

async function insertCustomer(request) {

    const data = Object.assign(db.CustomerInfo, request);
    const insert = await db.CustomerInfo.create(data);
    return insert;

}

async function getUserByUsername(requestUsername) {
    const data = await db.CustomerInfo.findOne({
        where: {
            username: requestUsername
        }
    });
    return data;
}

async function getUserById(id) {
    const data = await db.CustomerInfo.findByPk(id);
    return data;
}


module.exports = {
    insertCustomer,
    getUserByUsername,
    getUserById
}