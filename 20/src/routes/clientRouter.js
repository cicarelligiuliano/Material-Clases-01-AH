const { Router } = require('express');
const clientControllers = require('../controllers/clientControllers');
const { check, body } = require('express-validator');
const { validationResultMiddleware } = require('../middlewares/validationResult');
const { existeClienteDb } = require('../validations/clientExists');
const { addClientToRequest } = require('../middlewares/addClientToReq');
const { editClientSchema, createSchemasForClient } = require('../schemas/clientsSchema');

const router = Router();

router.get('/', clientControllers.getClients);

router.get('/:id', clientControllers.getClientById);

router.post('/', createSchemasForClient(false), validationResultMiddleware, clientControllers.createClient);

router.put(
    '/:id',
    createSchemasForClient(true),
    validationResultMiddleware,
    addClientToRequest,
    clientControllers.updateClient
);

router.delete('/:id', clientControllers.deleteClient);

module.exports = router;
