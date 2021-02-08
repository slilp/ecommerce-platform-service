const db = require('../models');
const {
    Op
} = require('sequelize');

async function insertAdvertisement(request) {

    const result = await db.Advertisement.create(request);

    return result;
}

async function searchAdvertisement(type) {
    const query = await db.Advertisement.findAndCountAll({
        where: {
            adsType: type,
            startDate: {
                [Op.lte] : Date.now()
            },
            expiredDate: {
                [Op.gte] :  Date.now()
            },
            isActive: true
        },
        order: [
            ['priority', 'DESC']
        ]
    });

    return query;
}


module.exports = {
    insertAdvertisement,
    searchAdvertisement
}