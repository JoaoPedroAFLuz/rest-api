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

    return response.status(201).json(newProduct);
  }

  update(request, response) {
    const { id } = request.params;
    const { nome, preco } = request.body;

    if (!nome || !preco) {
      return response
        .status(400)
        .json({ erro: 'Necessário preencher o nome e o preço do produto' });
    }

    const hasContact = ProductRepository.findById(id);

    if (!hasContact) {
      return response
        .status(404)
        .json({ erro: `Produto não encontrado com o id:${id}` });
    }

    const updatedProduct = ProductRepository.update(id, nome, preco);

    return response.json(updatedProduct);
  }

  delete(request, response) {
    const { id } = request.params;

    const hasContact = ProductRepository.findById(id);

    if (!hasContact) {
      return response
        .status(404)
        .json({ erro: `Produto não encontrado com o id:${id}` });
    }

    ProductRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new ProductController();
