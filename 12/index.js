const displayRoutes = require('express-routemap');
require('dotenv').config();

const app = require('./src/app');

const { PORT } = process.env;

app.listen(PORT, () => {
    displayRoutes(app);
    console.log('Server is runing at port ' + PORT);
});
