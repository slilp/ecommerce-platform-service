const express = require('express');
const {
    route
} = require('./customerRoute');
const router = express.Router();
const customerRoute = require('./customerRoute');
const marketplaceRoute = require('./marketplaceRoute');
const productInfoRoute = require('./productInfoRoute');
const orderRoute = require('./orderRoute');
const adsRoute = require('./adsRoute');
const addressRoute = require('./addressRoute');

router.use('/customer', customerRoute);
router.use('/marketplace', marketplaceRoute);
router.use('/product', productInfoRoute);
router.use('/order', orderRoute);
router.use('/advertisement', adsRoute);
router.use('/address', addressRoute);

module.exports = router;