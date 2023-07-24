const options = require('./options/knexoptions');

const knex = require('knex')(options);

knex('products')
    .where({ id: 2 })
    .del()
    .then((res) => {
        console.log('Producto eliminado correctamente', res);
    })
    .catch((err) => {
        console.log('Error al eliminar el producto', err);
    })
    .finally(() => knex.destroy());
