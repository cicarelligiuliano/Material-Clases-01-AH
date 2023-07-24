const { Router } = require('express');
const knex = require('../db/index');

const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
    try {
        const products = await knex('products').select('*');

        res.json(products);
    } catch (error) {
        console.log(error);
    }
});

module.exports = productsRouter
