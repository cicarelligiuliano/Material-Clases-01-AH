const { Product } = require('../db.js');
const uuidValidate = require('uuid-validate');

const checkProductInDb = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        req.product = product;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const checkIdUUID = async (req, res, next) => {
    const { id } = req.params;

    if (!uuidValidate(id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    next();
};
module.exports = { checkProductInDb,checkIdUUID };
