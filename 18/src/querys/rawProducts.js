const options = require('./options/knexoptions');

const knex = require('knex')(options);

knex.raw('select * from products')
    .then((res) => {
        console.table(res[0]);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => knex.destroy());
