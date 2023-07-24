const options = require('./options/knexoptions');

const knex = require('knex')(options);

knex('products')
    .select('*')
    .orderBy('quantity', 'desc')
    .then((products) => {
        console.table(products);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });

// (async () => {
//     try {
//         const products = await knex('products').select('name', 'price');

//         // products.sort((a, b) => b.quantity - a.quantity);

//         // const organizedProduct = products.map((product) => {
//         //     return { name: product.name, price: product.price };
//         // });

//         console.table(products);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         knex.destroy();
//     }
// })();
