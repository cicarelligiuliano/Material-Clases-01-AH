const parseArgs = require('minimist');

const options = { default: { nombre: 'pepe', apellido: 'copado' }, alias: { g: 'global' } };
// const args = require('minimist')(process.argv.slice(2));

const args = process.argv.slice(2);

console.log(parseArgs(args, options));

// console.log(parseArgs(['1', '2', '3', '4']));

//
// console.log(parseArgs(['-a', '1', '-b', '2', '3', '4']));

// console.log(parseArgs(['--n1', '1', '--n2', '2', '3', '4']));

//
// console.log(parseArgs(['-a', '1', '-b', '2', '--colores', '--cursiva']));
// console.log(parseArgs(['-a', '1', '-b', '2', '-c', '-x']));
// console.log(parseArgs(argv));

//
