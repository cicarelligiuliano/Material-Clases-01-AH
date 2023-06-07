// const yargs = require('yargs/yargs')(process.argv.slice(2));

// const args = yargs
//     .default({ mode: 'prod', port: 0, debug: false })
//     .boolean('debug')
//     .alias({ m: 'mode', p: 'port', d: 'debug' }).argv;

// module.exports = {
//     PORT: args.port,
//     DEBUG: args.debug,
//     NODE_ENV: args.mode,
// };

//config.js
const dotenv = require('dotenv');

const yargs = require('yargs/yargs')(process.argv.splice(2));

const args = yargs.default({ mode: 'dev' }).alias({ m: 'mode' }).argv;

const MODO = args.mode;

switch (MODO) {
    case 'dev':
        dotenv.config({ path: 'development.env' });
        break;
    case 'prod':
        dotenv.config({ path: 'production.env' });
        break;
    default:
        dotenv.config({ path: 'development.env' });
        break;
}
const PORT = process.env.PORT;
const API = process.env.API;

console.log(PORT, API);

module.exports = { PORT, API };
