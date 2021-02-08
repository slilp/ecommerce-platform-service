const advertisementService = require('../services/advertisementService');

function advertisementValidation(action) {
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

        const insert = await advertisementService.insertAdvertisement(req.body);

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

        const search = await advertisementService.searchAdvertisement(req.params.type);

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

module.exports = {
    advertisementValidation,
    create,
    search
}