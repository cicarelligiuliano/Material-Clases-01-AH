const { Router } = require('express');
const productControllers = require('../controllers/productControllers');
const { checkProductInDb, checkIdUUID } = require('../middlewares/productsMiddlewares');

const router = Router();

router.get('/', productControllers.getProducts);
router.get('/:id', checkIdUUID, productControllers.getProductById);
router.post('/', productControllers.createProduct);
router.put('/:id', checkIdUUID, checkProductInDb, productControllers.updateProduct);
router.delete('/:id', checkIdUUID, productControllers.deleteProduct);

module.exports = router;
