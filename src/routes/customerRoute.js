const express = require('express');
const router = express.Router();
const customerController =  require('../controllers/customerController.js');
const {
    jwtAuthentication
} = require('../passport/middleware');

router.post('/register', 
customerController.customerValidation('create'), 
customerController.register);

router.post('/login', 
customerController.customerValidation('login'), 
customerController.login);

router.get('/info', 
[jwtAuthentication,customerController.customerValidation('info')], 
customerController.info);

module.exports = router;