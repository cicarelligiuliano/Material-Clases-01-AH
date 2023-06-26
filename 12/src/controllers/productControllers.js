const { productManager } = require('../managers/productManager.js');

const getProducts = (req, res) => {
    const { limit = 20 } = req.query;
    const products = productManager.getProducts();

    res.json({ status: 'success', products: products.slice(0, limit) });
};

const getProductById = (req, res) => {
    const { id } = req.params;
    const product = productManager.getProductById(Number(id));

    if (product === 'Not Found') {
        return res.status(404).json({ status: 'error', message: 'Product not found' });
    }

    res.json({ status: 'success', product });
};

const createProduct = (req, res) => {
    const { title, description, price, stock, code } = req.body;
    const result = productManager.addProduct({ title, description, price, stock, code });

    if (result !== 'El producto se agrego correctamente') {
        return res.status(400).json({ status: 'error', message: result });
    }

    res.status(201).json({ status: 'success', message: result });
};

const editProduct = (req, res) => {
    const { id } = req.params;
    const { title, description, price, stock, code } = req.body;

    const newProduct = { title, description, price, stock, code };

    const result = productManager.editProduct(Number(id), newProduct);

    if (result !== `El producto con el id ${id} ha sido modificado con exito`) {
        return res.status(400).json({ status: 'error', message: result });
    }

    res.json({ status: 'success', message: result });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;

    const result = productManager.deleteProduct(Number(id));

    if (result != `Se borro el elemento con el id ${id}`) {
        return res.status(400).json({ status: 'error', message: result });
    }

    res.json({ status: 'success', message: result });
}

module.exports = { getProducts, getProductById, createProduct, editProduct, deleteProduct };
