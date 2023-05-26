const express = require('express');

const productsRouter = require('./productsRouter');
const stockRouter = require('./stockRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/stocks', stockRouter);
}

module.exports = routerApi;
