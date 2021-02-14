const db = require('../models');
const {
    Op
} = require('sequelize');

async function insertProduct(request, market, customer) {

    let product = Object.assign({}, request);

    let image = Object.assign([], request.images);

    product.marketplaceId = market;
    product.customerId = customer;

    const result = await db.sequelize.transaction(async (t) => {

        const insertProduct = await db.ProductInfo.create(product, {
            transaction: t
        });

        image = image.map(v => ({
            productId: insertProduct.productId,
            ...v
        }));

        const insertImage = await db.ProductImage.bulkCreate(
            [...image], {
                transaction: t
            });

        return insertProduct;
    });

    return result;
}

async function searchByID(id) {

    const query = await db.ProductInfo.findByPk(id);
    return query;
}

async function searchProduct(market, search, index, size) {

    const query = await db.ProductInfo.findAndCountAll({
        where: {
            marketplaceId: market,
            productName: {
                [Op.like]: `%${search}%`
            },
            isActive: true
        },
        order: [
            ['createdAt', 'DESC']
        ],
        offset: size * index,
        limit: size * 1,
        attributes: [
            "productId",
            "productName",
            "imagePath",
            "promotionCode1",
            "promotionCode2",
            "displayPrice",
            "netPrice"
        ]
    });

    return query;
}

async function searchAllProduct(market, index, size) {

    const query = await db.ProductInfo.findAndCountAll({
        where: {
            marketplaceId: market,
            isActive: true
        },
        order: [
            ['createdAt', 'DESC']
        ],
        offset: size * index,
        limit: size * 1,
        attributes: [
            "productId",
            "productName",
            "imagePath",
            "promotionCode1",
            "promotionCode2",
            "displayPrice",
            "netPrice"
        ]
    });

    return query;
}


async function getProductInfo(id) {

    const query = await db.ProductInfo.findByPk(id, {
        attributes: [
            "productId",
            "productName",
            "productDesc",
            "category",
            "imagePath",
            "subCategory",
            "displayPrice",
            "netPrice",
            "customerId",
            "selectedKey",
            "selectedValue"
        ],
        include: [{
                model: db.ProductImage,
                as: "productImage",
                attributes: [
                    "imageId",
                    "imagePath",
                    "order"
                ]
            },
            {
                model: db.CustomerInfo,
                as:"sellerInfo",
                attributes: [
                    "firstName",
                    "lastName",
                    "email",
                    "mobile",
                    "line",
                    "facebook",
                    "profileImagePath"
                ]
            }
        ]
    });

    return query;
}



module.exports = {
    insertProduct,
    searchByID,
    searchProduct,
    getProductInfo,
    searchAllProduct
}