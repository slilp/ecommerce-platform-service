const express = require('express');
const router = express.Router();
const customerController =  require('../controllers/customerController.js');
const {
    jwtAuthentication , facebookAuthentication ,facebookCallback
} = require('../passport/middleware');
const passport = require('passport');

router.post('/register', 
customerController.customerValidation('create'), 
customerController.register);

router.post('/login', 
customerController.customerValidation('login'), 
customerController.login);

router.get('/facebook', facebookAuthentication);

router.get('/facebook/callback',facebookCallback);

router.get('/facebook/login',checkAuthentication,customerController.facebook);

function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else{
        console.log(JSON.stringify(req.isAuthenticated()));
        res.redirect("http://localhost:3000/login");
    }
}


router.get('/info', 
[jwtAuthentication,customerController.customerValidation('info')], 
customerController.info);

module.exports = router;