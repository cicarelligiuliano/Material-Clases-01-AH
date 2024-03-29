const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/index.js'));

module.exports = app;
