const { Router } = require('express');
const { login, authRoute } = require('../controllers/authControllers');

const authRouter = Router();

authRouter.post('/login', login);
authRouter.get('/rutaAutorizada', authRoute);

module.exports = authRouter;
