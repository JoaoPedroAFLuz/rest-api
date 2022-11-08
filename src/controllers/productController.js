const ProductRepository = require('../repositories/productRepository');

class ProductController {
  index(request, response) {
    const products = ProductRepository.findAll();

    response.json(products);
  }

  show(request, response) {
    const { id } = request.params;
    const product = ProductRepository.findById(id);

    response.json(product);
  }

  store(request, response) {
    const { nome, preco } = request.body;

    if (!nome || !preco) {
      return response
        .status(400)
        .json({ erro: 'Necessário preencher o nome e o preço do produto' });
    }

    const newProduct = ProductRepository.create(nome, preco);

    return response.json(newProduct);
  }
}

module.exports = new ProductController();
