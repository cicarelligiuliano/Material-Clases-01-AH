const options = require('../options/knexoptions');

const knex = require('knex')(options);

knex.schema
    .hasTable('products')
    .then((exists) => {
        if (!exists) {
            knex.schema
                .createTable('products', (table) => {
                    table.increments('id');
                    table.string('name');
                    table.float('price');
                    table.integer('quantity');
                })
                .then((res) => {
                    console.log('Tabla creada correctamente');
                })
                .catch((err) => {
                    console.log('error al crear la tabla', err);
                });
        }
    })
    .catch((err) => console.log(err))
    .finally(() => knex.destroy());
