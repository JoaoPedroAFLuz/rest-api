const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.send('Dentro do routes.js');
});

module.exports = router;
