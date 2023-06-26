const { Router } = require('express');
const { productManager } = require('../managers/ProductManager');

const router = Router();

router.get('/', (req, res) => {
    const { limit } = req.query;
    const products = productManager.getProducts();
    if (limit) {
        return res.json({ status: 'success', products: products.slice(0, Number(limit)) });
    }

    res.json({ status: 'success', products: products });
});

router.get('/:idProduct', (req, res) => {
    const { idProduct } = req.params;

    const product = productManager.getProductById(Number(idProduct));

    if (typeof product == 'string') {
        return res.status(404).json({ status: 'fail', msg: product });
    }

    return res.status(200).json({ status: 'success', product: product });
});

router.post('/', (req, res) => {
    const { title, description, price, stock, code } = req.body;
    console.log(req.body);

    const result = productManager.addProduct({ title, description, price, stock, code });

    if (result !== 'El producto se agrego correctamente') {
        return res.status(400).json({ status: 'fail', msg: result });
    }

    res.status(201).json({ status: 'success' });
});

router.put('/:idProduct', (req, res) => {
    const { idProduct } = req.params;
    const newProduct = req.body;

    const result = productManager.editProduct(Number(idProduct), newProduct);

    if (result !== `El producto con el id ${idProduct} ha sido modificado con exito`) {
        return res.status(400).json({ status: 'Fail', msg: result });
    }

    res.status(200).json({ status: 'success' });
});

router.delete('/:idProduct', (req, res) => {
    const { idProduct } = req.params;

    const result = productManager.deleteProduct(Number(idProduct));

    if (result == 'Not Found') {
        return res.status(404).json({ status: 'fail', msg: result });
    }

    res.status(200).json({ status: 'success' });
});

module.exports = router;
