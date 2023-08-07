const { Router } = require('express');
const cartControllers = require('../controllers/cartControllers');

const router = Router();

router.get('/', cartControllers.getCarts);
router.get('/:id', cartControllers.getCartById);
router.put('/:id', cartControllers.editCart);
router.post('/:id/products/:idProduct', cartControllers.addProductToCart);
router.delete('/:id/products/:idProduct', cartControllers.removeProductFromCart);

module.exports = router;
