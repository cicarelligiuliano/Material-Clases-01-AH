const { Router } = require('express');
const productRouter = require('./productRouter.js');
const authRouter = require('./authRouter.js');

const router = Router();

router.use('/products', productRouter);
router.use('/auth', authRouter);


module.exports = router;
