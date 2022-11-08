const express = require('express');
const ProductController = require('./controllers/productController');

const router = express.Router();

router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.post('/products', ProductController.store);
router.put('/products/:id', ProductController.update);

module.exports = router;
