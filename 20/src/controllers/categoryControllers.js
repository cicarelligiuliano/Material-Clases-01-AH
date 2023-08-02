const { Category, Product } = require('../db.js');
const uuidValidate = require('uuid-validate');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: { model: Product, attributes: ['title', 'id'], through: { attributes: [] } },
        });

        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        if (uuidValidate(id) === false) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const category = await Category.findByPk(id, {
            include: { model: Product, attributes: ['title', 'id'], through: { attributes: [] } },
        });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const category = await Category.findOne({ where: { name } });

        if (category) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const newCategory = await Category.create({ name });

        res.status(201).json({ status: 'ok', message: 'Category created successfully with id  ' + newCategory.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(400).json({ message: 'Category not Found' });
        }

        const checkName = await Category.findOne({ where: { name } });

        if (checkName) {
            return res.status(400).json({ message: 'Category with name' + name + 'already exists' });
        }

        await category.update({ name });

        res.json({ status: 'ok', message: 'Category updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        if (uuidValidate(id) === false) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not Found' });
        }

        await category.destroy();

        res.json({ status: 'ok', message: 'Category deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
