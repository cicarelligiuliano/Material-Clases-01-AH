//clientSchemas.js
const { checkSchema } = require('express-validator');
const { existeEmailDb, existeClienteDb } = require('../validations/clientExists');

const createSchemasForClient = (optional = false) => {
    return checkSchema({
        id: {
            isUUID: true,
            errorMessage: 'El id debe ser un UUID',
            custom: {
                options: existeClienteDb,
            },
        },
        name: {
            optional: optional,
            isString: true,
            trim: true,
            errorMessage: 'El nombre debe ser un string',
            isLength: {
                options: { max: 20 },
                errorMessage: 'El nombre debe tener como máximo 20 caracteres',
            },
        },
        lastName: {
            optional: optional,
            isString: true,
            errorMessage: 'El apellido debe ser un string',
            isLength: {
                options: { max: 20 },
                errorMessage: 'El nombre debe tener como máximo 20 caracteres',
            },
            trim: true,
        },
        email: {
            optional: optional,
            isEmail: true,
            trim: true,
            custom: {
                options: existeEmailDb,
            },
        },
        address: {
            optional: optional,
            isString: true,
            errorMessage: 'La dirección debe ser un string',
            isLength: { options: { min: 5, max: 20 }, errorMessage: 'El nombre debe tener como maximo 20 caracteres' },
            trim: true,
        },
        invoiceAddress: {
            optional: optional,
            isString: true,
            errorMessage: 'La dirección debe ser un string',
            isLength: { options: { min: 5, max: 20 }, errorMessage: 'El nombre debe tener como maximo 20 caracteres' },
            trim: true,
        },
        phone: {
            optional: optional,
            isMobilePhone: true,
            trim: true,
        },
    });
};

const editClientSchema = checkSchema({
    id: {
        isUUID: true,
        errorMessage: 'El id debe ser un UUID',
        custom: {
            options: existeClienteDb,
        },
    },
    name: {
        optional: true,
        isString: true,
        trim: true,
        errorMessage: 'El nombre debe ser un string',
        isLength: {
            options: { max: 20 },
            errorMessage: 'El nombre debe tener como máximo 20 caracteres',
        },
    },
    lastName: {
        optional: true,
        isString: true,
        errorMessage: 'El apellido debe ser un string',
        isLength: {
            options: { max: 20 },
            errorMessage: 'El nombre debe tener como máximo 20 caracteres',
        },
        trim: true,
    },
    email: {
        optional: true,
        isEmail: true,
        trim: true,
        custom: {
            options: existeEmailDb,
        },
    },
    address: {
        optional: true,
        isString: true,
        errorMessage: 'La dirección debe ser un string',
        isLength: { options: { min: 5, max: 20 }, errorMessage: 'El nombre debe tener como maximo 20 caracteres' },
        trim: true,
    },
    invoiceAddress: {
        optional: true,
        isString: true,
        errorMessage: 'La dirección debe ser un string',
        isLength: { options: { min: 5, max: 20 }, errorMessage: 'El nombre debe tener como maximo 20 caracteres' },
        trim: true,
    },
    phone: {
        optional: true,
        isMobilePhone: true,
        trim: true,
    },
});

module.exports = { createSchemasForClient, editClientSchema };
