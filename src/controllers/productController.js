const ProductRepository = require('../repositories/productRepository')

class ProductController {
  index(request, response) {
    const products = ProductRepository.findAll();

    response.json(products);
  }
}

module.exports = new ProductController();
