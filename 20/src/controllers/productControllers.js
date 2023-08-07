const { Category, Product } = require('../db.js');
const uuidValidate = require('uuid-validate');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: {
                model: Category,
                through: { attributes: [] },
            },
        });

        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id, {
            include: {
                model: Category,
                through: { attributes: [] },
            },
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createProduct = async (req, res) => {
    try {
        const { title, description, price, stock, weight, categories } = req.body;

        if (!title || !description || !price || !stock || !weight || !categories) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const exists = await Product.findOne({ where: { title } });

        if (exists) {
            return res.status(409).json({ message: 'Product already exists' });
        }

        const product = await Product.create({ title, description, price, stock, weight });

        const productCategories = await Category.findAll({ where: { name: categories } });

        product.setCategories(productCategories);

        res.status(201).json({ status: 'ok', message: 'Product created successfully', data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id: oldId, categories, ...editedProduct } = req.body;
        const product = req.product;

        await product.update(editedProduct);

        if (categories?.length > 0) {
            const productCategories = await Category.findAll({ where: { name: categories } });
            await product.setCategories(productCategories);
        }

        res.json({ status: 'ok', message: 'Product updated successfully', data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.destroy();

        res.json({ status: 'ok', message: 'Product deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
