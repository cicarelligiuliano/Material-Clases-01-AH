const options = require('./options/knexoptions');

const knex = require('knex')(options);

const subquery = knex('products')
    .select('id')
    .where(function () {
        this.where('id', '>', 28);
        this.where('price', '<', 0.6);
        this.where('quantity', '<', 55);
        this.orWhere('quantity', '>', 100);
    });

knex('products')
    .select('name')
    .where('id', 'in', subquery)
    .then((rows) => {
        rows.forEach((row) => {
            console.log(`${row.name}`);
        });
    })
    .catch((err) => console.log(err))
    .finally(() => {
        knex.destroy();
    });

    
