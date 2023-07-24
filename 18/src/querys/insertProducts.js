const options = require('../options/knexoptions');

const knex = require('knex')(options);

const products = [
    { name: 'Banana', price: 1.0, quantity: 50 },
    { name: 'Manzana', price: 0.75, quantity: 25 },
    { name: 'Pera', price: 1.5, quantity: 30 },
    { name: 'Sandia', price: 0.4, quantity: 200 },
    { name: 'Mandarina', price: 0.5, quantity: 50 },
    { name: 'Naranja', price: 0.5, quantity: 80 },
    { name: 'Tomate', price: 1.2, quantity: 40 },
    { name: 'Lechuga', price: 0.2, quantity: 30 },
];

knex('products')
    .insert(products)
    .then((res) => {
        console.log('Productos agregados correctamente', res);
    })
    .catch((err) => {
        console.log('Error al agregar los productos', err);
    })
    .finally(() => knex.destroy());

// knex('products')
//     .insert({ name: 'Kiwi', price: 4.0, quantity: 50 })
//     .then((res) => {
//         console.log('Productos agregados correctamente', res);
//     })
//     .catch((err) => {
//         console.log('Error al agregar los productos', err);
//     })
//     .finally(() => knex.destroy());
