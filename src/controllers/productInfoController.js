const productInfoService = require('../services/productInfoService');
const marketplaceService = require('../services/marketplaceService');
const {
    v4: uuid
} = require('uuid');

function productInfoValidation(action) {
    switch (action) {
        case 'create':
            return []
        case 'search':
            return []
        case 'update':
            return []
        case 'getProductInfo':
            return []
        default:
            return []
    }
}

async function create(req, res) {
    try {

        req.body.productId = uuid();

        req.body.images = req.body.images.map(value => ({
            imageId: uuid(),
            imagePath: value.imagePath,
            order: value.order
        }));

        const insert = await productInfoService.insertProduct(req.body, req.params.market, req.user);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: insert
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 'ECOM-500',
            message: error.message
        });
    }
}


async function search(req, res) {
    try {

        const search = await productInfoService.searchProduct(req.params.market, req.query.s, req.params.index, req.params.size);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: {
                totalRecord: search.count,
                listData: search.rows
            }
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 'ECOM-500',
            message: error.message
        });
    }
}

async function searchAll(req, res) {
    try {

        const search = await productInfoService.searchAllProduct(req.params.market, req.params.index, req.params.size);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: {
                totalRecord: search.count,
                data: search.rows
            }
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 'ECOM-500',
            message: error.message
        });
    }
}



async function getProductInfo(req, res) {
    try {

        const search = await productInfoService.getProductInfo(req.params.id);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: search
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 'ECOM-500',
            message: error.message
        });
    }
}


module.exports = {
    productInfoValidation,
    create,
    search,
    getProductInfo,
    searchAll
}