const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisementController');

router.post('/create',
advertisementController.advertisementValidation('create'),
advertisementController.create);

router.get('/search/:type',
advertisementController.advertisementValidation('search'),
advertisementController.search);

module.exports = router;