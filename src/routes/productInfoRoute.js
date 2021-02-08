const express = require('express');
const router = express.Router();
const productInfoController = require('../controllers/productInfoController');
const {jwtAuthentication} = require('../passport/middleware');

router.post('/create/:market/:customer',
[jwtAuthentication,productInfoController.productInfoValidation('create')],
productInfoController.create);

router.get('/search/:market/:index/:size/:product',
productInfoController.productInfoValidation('search'),
productInfoController.search);

router.get('/search/:market/:index/:size',
productInfoController.productInfoValidation('searchAll'),
productInfoController.searchAll);

router.get('/info/:id',
productInfoController.productInfoValidation('getProductInfo'),
productInfoController.getProductInfo);

module.exports = router;