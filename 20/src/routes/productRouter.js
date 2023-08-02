const { Router } = require('express');
const productControllers = require('../controllers/productControllers');

const router = Router();

router.get('/', productControllers.getProducts);
router.get('/:id', productControllers.getProductById);
router.post('/', productControllers.createProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

module.exports = router;
