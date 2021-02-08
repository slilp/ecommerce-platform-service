const db = require('../models');
const {
    Op
} = require("sequelize");

async function insertMarketplace(request) {

    const data = Object.assign(db.MarketplaceInfo, request);

    const insert = await db.MarketplaceInfo.create(data);

    return insert;
}

async function updateMarketplace(existingData, updateRequest) {

    const update = Object.assign(existingData, updateRequest);

    const result = await update.save();

    return result;
}

async function searchById(id) {
    const query = await db.MarketplaceInfo.findByPk(id);
    return query;
}

async function searchMarketplace(searchRequest,index,size) {

    const select = await db.MarketplaceInfo.findAndCountAll({
        where: {
            marketName: {
                [Op.like]: `%${searchRequest}%`
            },
            isActive: true
        },
        order: [
            ['order', 'DESC']
        ],
        offset: size*index,
        limit: size*1
    });

    return select;
}

module.exports = {
    insertMarketplace,
    updateMarketplace,
    searchMarketplace,
    searchById
}