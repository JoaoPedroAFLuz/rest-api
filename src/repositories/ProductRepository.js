const { v4 } = require('uuid');

const products = [
  {
    id: v4(),
    nome: 'Geladeira',
    preco: 2500,
  },
  {
    id: v4(),
    nome: 'Fogão',
    preco: 1500,
  },
  {
    id: v4(),
    nome: 'Smartphone',
    preco: 2000,
  },
];

class ProductRepository {
  findAll() {
    return products;
  }

  findById(id) {
    return products.find((product) => product.id === id);
  }

  create(nome, preco) {
    const newProduct = {
      id: v4(),
      nome,
      preco,
    };

    products.push(newProduct)

    return newProduct;
  }
}

module.exports = new ProductRepository();
