const express = require('express');
const { addProduct, searchProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/add', addProduct);
router.get('/search', searchProducts);

module.exports = router;
