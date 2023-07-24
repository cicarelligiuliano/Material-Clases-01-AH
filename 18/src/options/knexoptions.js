require('dotenv').config();
const { DB_CLIENT, DB_FILE_NAME, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// const options = {
//     client: DB_CLIENT,
//     connection: {
//         host: DB_HOST,
//         user: DB_USER,
//         password: DB_PASSWORD,
//         database: DB_NAME,
//     },
//     pool: { min: 0, max: 7 },
// };

const options = {
    client: 'sqlite3',
    connection: { filename: './src/db/mydb.sqlite' },
    useNullAsDefault: true,
};

module.exports = options;
