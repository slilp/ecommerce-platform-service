const db = require('../models');

async function insertCustomerAddress(user, request) {


    const result = await db.CustomerAddress.create({
        ...request,
        customerId: user
    });

    return result;
}

async function getCustomerAddress(user) {

    const result = await db.CustomerAddress.findOne({
        where:{
            customerId : user
        },
        attributes: [
            'id',
            'addressInfo',
            'zipCode',
            'isDefault'
        ]
    });

    return result;
}


module.exports = {
    insertCustomerAddress,
    getCustomerAddress
}