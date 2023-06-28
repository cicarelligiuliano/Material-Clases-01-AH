const express = require('express');

const app = express();

const routes = require('./routes');
const { applicationMiddleware, routerMiddleware } = require('./middlewares/middlewares');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
// app.use(applicationMiddleware);

// app.use('/api', routerMiddleware('EN ENRUTADOR ROUTES'), routes);

app.use('/api', routes);

module.exports = app;

// const revisarAutentifacion = (req, res, next) => {
//     const { authorization } = req.headers;

//     if (authorization.split(' ')[1] === '1234') {
//         req.user = { name: 'Pepito', rol: 'admin' };
//         next();
//     } else {
//         return res.status(403).json({ status: 'error', message: 'No tienes permisos' });
//     }
// };

// app.get('/', (req, res) => {
//     console.log(req.banana);
//     res.send('Hello World!');
// });

// app.get('/about', (req, res) => {
//     console.log(req.banana);
//     res.send('ABOUT PAGE');
// });

// app.post('/', revisarAutentifacion, (req, res) => {
//     console.log('USUARIOOOO:', req.user);

//     res.send('Acceso autorizado');
// });
