const express = require('express');
const { getProducts, getProduct } = require('../controllers/product');

const router = express.Router();

router.get('/all', getProducts); //http://localhost:3000/product/all
router.get('/:id', getProduct);

module.exports = {
  routes: router,
};
