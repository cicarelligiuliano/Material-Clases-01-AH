const { Router } = require('express');
const { getProducts, getProductById, createProduct, editProduct, deleteProduct } = require('../controllers/productControllers');

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', createProduct);
productRouter.put('/:id', editProduct);
productRouter.delete('/:id', deleteProduct);

module.exports = productRouter;
