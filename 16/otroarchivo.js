// Filesystem
const UserManagerFS = require('./userManagerFS');

//MongoDB || SQL -> PostreSQL
const UserManagerDB = require('./userManagerDB');

require('dotenv').config();

const tipoDeAlmacenamiento = process.env.STORAGE_TYPE;

let userManager;
switch (tipoDeAlmacenamiento) {
    case 'FS':
        userManager = new UserManagerFS;
        break;
    case 'DB':
        userManager = new UserManagerDB;
        break;
}

module.exports = userManager;
