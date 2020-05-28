const express = require('express');

// const path = require('path');
// const adminData = require('./admin');

const router = express.Router();
const productsController = require('../controllers/products')

router.get('/', productsController.getProducts);

module.exports = router;