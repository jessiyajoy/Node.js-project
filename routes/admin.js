const express = require('express');
const path = require('path');

//const rootDir = require('../util/path');

const router = express.Router();
const productsController = require('../controllers/products')

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;