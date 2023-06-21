const { Router } = require('express');

const productRouter = require('./productsRouter');

const router = Router();

router.use('/users', productRouter);

module.exports = router;
