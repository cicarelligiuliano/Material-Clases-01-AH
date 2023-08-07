//existeClienteDb.js
const { Client } = require('../db');

const existeClienteDb = async (id = '') => {
    const existeCliente = await Client.findByPk(id);
    if (!existeCliente) {
        throw new Error(`El cliente con id ${id} no existe`);
    }
};

const existeEmailDb = async (email = '') => {
    const existeCliente = await Client.findOne({ where: { email } });
    if (existeCliente) {
        throw new Error(`El email ${email} ya esta siendo utilizado`);
    }
};

module.exports = { existeClienteDb, existeEmailDb };
