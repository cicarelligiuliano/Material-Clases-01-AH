const { Router } = require('express');
const clientControllers = require('../controllers/clientControllers');

const router = Router();

router.get('/', clientControllers.getClients);
router.get('/:id', clientControllers.getClientById);
router.post('/', clientControllers.createClient);
router.put('/:id', clientControllers.updateClient);
router.delete('/:id', clientControllers.deleteClient);

module.exports = router;
