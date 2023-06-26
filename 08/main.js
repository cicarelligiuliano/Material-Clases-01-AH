// const parseArgs = require('minimist');

// const args = process.argv.slice(2);

// const options = {
//     alias: { m: 'mode', p: 'port', d: 'debug', _: 'otros' },
//     default: { mode: 'prod', port: '0', debug: false },
// };

// const arguments = parseArgs(args, options);

// console.log(parseArgs(args, options));

// const yargs = require('yargs/yargs')(process.argv.slice(2));
// // const args = yargs.default({ nombre: 'Pepe', apellido: 'colico' }).alias({ n: 'nombre', a: 'apellido' }).argv;

// //modo defualt "prod"
// //port default 0
// //debug default false

// const args = yargs
//     .default({ mode: 'prod', port: '0', debug: false })
//     .boolean('debug')
//     .alias({ m: 'mode', p: 'port', d: 'debug' }).argv;

// console.log({ mode: args.mode, port: args.port, debug: args.debug, otros: args._ });

require('dotenv').config();

console.log(process.env.PORT);

