const router = require('express').Router();

const { routerMiddleware } = require('../middlewares/middlewares');
const usersRouter = require('./userRouter');

// router.use('/users', routerMiddleware('EN USERS ROUTER'), usersRouter);
// router.use('/clients', routerMiddleware('EN CLIENTS ROUTER'), require('./clientRouter'));

router.use('/users', usersRouter);
router.use('/clients', require('./clientRouter'));

module.exports = router;
