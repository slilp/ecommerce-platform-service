const orderService = require('../services/orderService');
const {
    v4: uuid
} = require('uuid');

function cartValidation(action) {
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

        req.body.orderId = uuid();

        const insert = await orderService.insertOrder(req.body, req.user);

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

        const search = await orderService.searchCustomerOrder(req.user, req.params.status, req.params.index, req.params.size);

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
    create,
    search,
    cartValidation
}