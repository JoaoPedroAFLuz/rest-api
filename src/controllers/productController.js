class ProductController {
  index(request, response) {
    response.send('Dentro do ProductController');
  }
}

module.exports = new ProductController();
