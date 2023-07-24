const options = require('../options/knexoptions');

const knex = require('knex')(options);

module.exports = knex;
