const express = require('express');
const router = express.Router();
const marketplaceController = require('../controllers/marketplaceController');
const {
    jwtAuthentication
} = require('../passport/middleware');

router.post('/create',
    marketplaceController.marketplaceValidation('create'),
    marketplaceController.create);

router.put('/update/:id',
    marketplaceController.marketplaceValidation('update'),
    marketplaceController.update);

router.get('/search/:index/:size',
    marketplaceController.marketplaceValidation('search'),
    marketplaceController.search);

router.get('/info/:id',
    marketplaceController.marketplaceValidation('info'),
    marketplaceController.info);



module.exports = router;