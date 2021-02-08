const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const {jwtAuthentication} = require('../passport/middleware');


router.post('/create',
[jwtAuthentication,orderController.cartValidation('create')],
orderController.create);

router.get('/search/:status/:index/:size',
[jwtAuthentication,orderController.cartValidation('search')],
orderController.search);



module.exports = router;