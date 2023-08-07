const { Client, Cart, Product } = require('../db.js');
const uuidValidate = require('uuid-validate');

const getClients = async (req, res) => {
    try {
        const clients = await Client.findAll({
            include: {
                model: Cart,
                include: Product,
            },
        });

        res.json(clients);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getClientById = async (req, res) => {
    try {
        const { id } = req.params;

        if (uuidValidate(id) === false) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const client = await Client.findByPk(id, { include: Cart });

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        res.json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createClient = async (req, res) => {
    try {
        const { name, lastName, email, address, invoiceAddress, phone } = req.body;

        if (!name || !lastName || !email || !address || !invoiceAddress || !phone) {
            return res.status(400).json({ message: 'Missing fields' });
        }

        const client = await Client.findOne({ where: { email } });

        if (client) {
            return res.status(400).json({ message: 'Client already exists' });
        }

        const newClient = await Client.create({ name, lastName, email, address, invoiceAddress, phone });
        const newCart = await Cart.create();

        await newClient.setCart(newCart);

        res.json({ status: 'ok', message: 'Client created successfully with id  ' + newClient.id });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateClient = async (req, res) => {
    try {
        const client = req.client;
        await client.update({ ...req.body });
        
        res.json({ status: 'ok', message: 'Client updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;

        if (uuidValidate(id) === false) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const client = await Client.findByPk(id);

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        await client.destroy();

        res.json({ status: 'ok', message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getClients, getClientById, createClient, updateClient, deleteClient };
