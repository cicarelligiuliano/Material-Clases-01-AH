const app = require('./src/app.js');
const { conn, Student } = require('./src/db.js');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

conn.sync({ force: true })
    .then(async () => {
        console.log('Database connected');

        await Student.create({ name: 'Giuliano', lastName: 'Cicarelli', age: 28 });
        await Student.create({ name: 'Mariano', lastName: 'Turri', age: 28 });
        await Student.create({ name: 'Cleopatra', lastName: 'Lopez', age: 28 });
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error al conectar con la base de datos', error);
    });
