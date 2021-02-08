const express = require('express');
const router = express.Router();
const customerController =  require('../controllers/customerController.js');

router.post('/register', 
customerController.customerValidation('create'), 
customerController.register);

router.post('/login', 
customerController.customerValidation('login'), 
customerController.login);



module.exports = router;