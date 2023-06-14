const express = require('express');
const { getFyH, getVisitas, getGeneral } = require('./controllers/fechaYHoraController');

const app = express();
// app.get('/', (req, res) => {
//     res.status(200).send('Hello world!');
// });

// app.get('/about', (req, res) => {
//     res.send('This is the about page');
// });

// app.get('/otraCosa', (req, res) => {
//     res.send('Page otra');
// });

// app.get('*', (req, res) => {
//     res.status(404).send('Error 404');
// });

//Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:
// A) '/' en esta ruta raíz, el servidor enviará string que contenga el mensaje: 'Bienvenidos al servidor express'.
// B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
// C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto:
// { fyh: '11/1/2021 11:36:04' }

app.get('/', getGeneral);
app.get('/visitas', getVisitas);
app.get('/fyh', getFyH);

app.get('/admin/:password', (req, res) => {
    const { password } = req.params;

    if (Number(password) != 123456) {
        return res.status(403).json({ msg: 'No autorizado' });
    } else {
        return res.json({ msg: 'Bienvenido admin' });
    }
});

//SERVIDOR o ROUTER "." "TIPO DE CONSULTA" ("RUTA", "CONTROLADOR")

module.exports = { server: app };
