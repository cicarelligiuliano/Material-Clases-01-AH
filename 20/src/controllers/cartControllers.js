const { Cart, Client, Product, Cart_product } = require('../db.js');
const uuidValidate = require('uuid-validate');

const getCarts = async (req, res) => {
    try {
        const carts = await Cart.findAll({
            include: [
                { model: Client, attributes: ['id', 'email'] },
                { model: Product, attributes: ['id', 'title'], through: { attributes: ['quantity'] } },
            ],
            attributes: { exclude: ['clientId'] },
        });

        res.json(carts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getCartById = async (req, res) => {
    try {
        const { id } = req.params;

        if (uuidValidate(id) === false) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const cart = await Cart.findByPk(id, {
            include: [
                { model: Client, attributes: ['id', 'email'] },
                { model: Product, attributes: ['id', 'title'], through: { attributes: ['quantity'] } },
            ],
            attributes: { exclude: ['clientId'] },
        });

        if (!cart) return res.status(404).json({ message: `No existe un carrito con id ${id}` });

        res.json(cart);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const editCart = async (req, res) => {
    try {
        const { id } = req.params;

        if (uuidValidate(id) === false) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const { ordered } = req.body;

        const cart = await Cart.findByPk(id);

        if (!cart) return res.status(404).json({ message: `No existe un carrito con id ${id}` });

        await cart.update({ ordered });

        res.json({ message: `Carrito con id ${id} actualizado` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const addProductToCart = async (req, res) => {
    const { id, idProduct } = req.params;

    if (uuidValidate(id) === false || uuidValidate(idProduct) == false) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    const cart = await Cart.findByPk(id);

    if (!cart) return res.status(404).json({ message: `No existe un carrito con id ${id}` });

    const product = await Product.findByPk(idProduct);

    if (!product) return res.status(404).json({ message: `No existe un producto con id ${idProduct}` });

    const cartProduct = await Cart_product.findOne({ where: { cartId: id, productId: idProduct } });

    if (!cartProduct) {
        await cart.addProduct(product);
    } else {
        await cartProduct.update({ quantity: cartProduct.quantity + 1 });
    }

    await cart.update({ subtotal: cart.subtotal + product.price, total: cart.total + product.price * 1.21 });

    res.json({ message: `Producto con id ${idProduct} agregado al carrito con id ${id}` });
};

const removeProductFromCart = async (req, res) => {
    const { id, idProduct } = req.params;

    if (uuidValidate(id) === false || uuidValidate(idProduct) == false) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    const cart = await Cart.findByPk(id);

    if (!cart) return res.status(404).json({ message: `No existe un carrito con id ${id}` });

    const product = await Product.findByPk(idProduct);

    if (!product) return res.status(404).json({ message: `No existe un producto con id ${idProduct}` });

    const cartProduct = await Cart_product.findOne({ where: { cartId: id, productId: idProduct } });

    if (!cartProduct) {
        return res
            .status(400)
            .json({ message: `El producto con id ${idProduct} no se encuentra en el carrito con id ${id}` });
    } else if (cartProduct.quantity > 1) {
        await cartProduct.update({ quantity: cartProduct.quantity - 1 });
    } else if (cartProduct.quantity === 1) {
        await cart.removeProduct(product);
    }

    await cart.update({ subtotal: cart.subtotal - product.price, total: cart.total - product.price * 1.21 });

    res.json({ message: `Producto con id ${idProduct} quitó del carrito con id ${id}` });
};

module.exports = { getCarts, getCartById, editCart, addProductToCart, removeProductFromCart };
