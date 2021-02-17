const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
const {
    jwtAuthentication
} = require('../passport/middleware');

router.post('/create',
    [jwtAuthentication, addressController.addressValidation('create')],
    addressController.insert)

router.get('/info',
    [jwtAuthentication, addressController.addressValidation('info')],
    addressController.info)

module.exports = router;