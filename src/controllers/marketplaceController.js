const marketplaceService = require('../services/marketplaceService');
const {
    v4: uuid
} = require('uuid');

function marketplaceValidation(action) {
    switch (action) {
        case 'create':
            return []
        case 'search':
            return []
        case 'update':
            return []
        default:
            return []
    }
}

async function create(req, res) {
    try {

        req.body.marketplaceId = uuid();

        const insert = await marketplaceService.insertMarketplace(req.body);

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

async function update(req, res) {
    try {
        const id = req.params.id;

        const existingData = await marketplaceService.searchById(id);

        if (!existingData) {
            return res.status(404).json({
                status: false,
                statusCode: 'ECOM-404',
                message: 'Not found data'
            });
        }

        const update = await marketplaceService.updateMarketplace(existingData, req.body);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: update
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

        const search = await marketplaceService.searchMarketplace(req.params.name, req.params.index, req.params.size);
        
        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: {
                totalRecord : search.count,
                data : search.rows 
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
    marketplaceValidation,
    create,
    update,
    search
}