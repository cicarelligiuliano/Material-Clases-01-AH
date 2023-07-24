const options = require('./options/knexoptions');

const knex = require('knex')(options);

knex('products')
    .where({ id: 2 })
    .update({ price: 2 })
    .then((res) => {
        console.log('Producto actualizado correctamente', res);
    })
    .catch((err) => {
        console.log('Error al actualizar el producto', err);
    })
    .finally(() => knex.destroy());

// (async () => {
//     try {
//         const res = await knex('productsss').where({ id: 2 }).update({ price: 3 });
//         console.log('Producto actualizado correctamente', res);
//     } catch (error) {
//         console.log('Error al actualizar el producto', error);
//     } finally {
//         knex.destroy();
//     }
// })();

// knex('products')
//     .where('id', '>', 12)
//     .orWhere('price', '>', 1.0)
//     .update({ price: 14 })
//     .then((res) => {
//         console.log('Producto actualizado correctamente', res);
//     })
//     .catch((err) => {
//         console.log('Error al actualizar el producto', err);
//     })
//     .finally(() => knex.destroy());
