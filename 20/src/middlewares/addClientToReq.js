const { Client } = require('../db');

const addClientToRequest = async (req, res, next) => {
    try {
        const client = await Client.findByPk(req.params.id);
        req.client = client;

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addClientToRequest };
