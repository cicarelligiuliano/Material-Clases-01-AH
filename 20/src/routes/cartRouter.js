const { Router } = require('express');
const { getCarts } = require('../controllers/cartControllers');

const router = Router();

router.get('/', getCarts);

module.exports = router;
