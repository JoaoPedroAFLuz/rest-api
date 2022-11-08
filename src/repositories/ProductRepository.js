const { v4 } = require('uuid');

let products = [
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

    products.push(newProduct);

    return newProduct;
  }

  update(id, nome, preco) {
    const updatedProduct = {
      id,
      nome,
      preco,
    };

    products = products.map((product) =>
      product.id === id ? updatedProduct : product
    );

    return updatedProduct;
  }

  delete(id) {
    products = products.filter((product) => product.id !== id);
  }
}

module.exports = new ProductRepository();
