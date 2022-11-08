const express = require('express');
const ProductController = require('./controllers/productController');

const router = express.Router();

router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.post('/products', ProductController.store);


module.exports = router;
