require('dotenv').config();

const { conn, Client, Cart, Category, Product } = require('./src/db');
const app = require('./src/app');
const PORT = process.env.PORT || 8080;

conn.sync({ force: false })
    .then(async () => {
        console.log('Conexión a la base de datos exitosa');

        // const [giuliano] = await Client.findOrCreate({
        //     where: {
        //         name: 'Giuliano',
        //         lastName: 'Cicarelli',
        //         email: 'giuliano@email.com',
        //         address: 'casa 123',
        //         invoiceAddress: 'casa 123',
        //         phone: '12345',
        //     },
        // });
        // if (!giuliano.cartId != null) {
        //     await giuliano.setCart(await Cart.create());
        // }
        // const [martin] = await Client.findOrCreate({
        //     where: {
        //         name: 'Marcos',
        //         lastName: 'Daut',
        //         email: 'marcos@email.com',
        //         address: 'casa 123',
        //         invoiceAddress: 'casa 123',
        //         phone: '12345',
        //     },
        // });
        // if (!martin.cartId != null) {
        //     await martin.setCart(await Cart.create());
        // }

        // const [silvia] = await Client.findOrCreate({
        //     where: {
        //         name: 'Silvia',
        //         lastName: 'Maidana',
        //         email: 'silvia@email.com',
        //         address: 'casa 123',
        //         invoiceAddress: 'casa 123',
        //         phone: '12345',
        //     },
        // });
        // if (!silvia.cartId != null) {
        //     await silvia.setCart(await Cart.create());
        // }

        [
            'Interiores',
            'Exterior',
            'Cocina',
            'Baño',
            'Dormitorio',
            'Living',
            'Comedor',
            'Jardin',
            'Oficina',
            'Accesorios',
        ].forEach(async (category) => {
            await Category.findOrCreate({ where: { name: category } });
        });

        const products = [
            {
                title: 'Sillon',
                description: 'Sillon de 3 cuerpos',
                price: 10000,
                stock: 10,
                weight: 20,
                categories: ['Living', 'Comedor'],
            },
            {
                title: 'Mesa',
                description: 'Mesa de madera',
                price: 5000,
                stock: 10,
                weight: 20,
                categories: ['Living', 'Comedor'],
            },
            {
                title: 'Silla',
                description: 'Silla de madera',
                price: 2000,
                stock: 10,
                weight: 20,
                categories: ['Living', 'Comedor'],
            },
            {
                title: 'Cama',
                description: 'Cama de 2 plazas',
                price: 10000,
                stock: 10,
                weight: 20,
                categories: ['Dormitorio'],
            },
            {
                title: 'Mesa de luz',
                description: 'Mesa de luz de madera',
                price: 5000,
                stock: 10,
                weight: 20,
                categories: ['Dormitorio'],
            },
            {
                title: 'Placard',
                description: 'Placard de 2 puertas',
                price: 2000,
                stock: 10,
                weight: 20,
                categories: ['Dormitorio'],
            },
        ].forEach(async (product) => {
            const [newProduct] = await Product.findOrCreate({
                where: {
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                    weight: product.weight,
                },
            });
            await newProduct.setCategories(
                await Category.findAll({
                    where: {
                        name: product.categories,
                    },
                })
            );
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch((error) => {
        console.log('Fallo la conexion a la base de datos', error);
    });
