const addressService = require("../services/addressService");

function addressValidation(action) {
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


async function insert(req, res) {
    try {

        const insert = await addressService.insertCustomerAddress(req.user, req.body);

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

async function info(req, res) {
    try {

        const query = await addressService.getCustomerAddress(req.user);

        return res.json({
            status: true,
            statusCode: 'ECOM-200',
            message: 'success',
            data: query
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
    addressValidation,
    insert,
    info
}