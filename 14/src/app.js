const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// app.get('/public', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

app.use('/public', express.static(__dirname + '/public'));



module.exports = app;
