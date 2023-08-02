const { Router } = require('express');

const routes = Router();

routes.use('/clients', require('./clientRouter'));
routes.use('/products', require('./productRouter'));
routes.use('/categories', require('./categoryRouter'));
routes.use('/carts', require('./cartRouter'));

module.exports = routes;
