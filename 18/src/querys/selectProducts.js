const options = require('../options/knexoptions');

const knex = require('knex')(options);

knex('products')
    .select('*')
    .then((products) => {
        console.table(products);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
