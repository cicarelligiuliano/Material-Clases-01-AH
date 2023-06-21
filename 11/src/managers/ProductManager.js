const fs = require('fs');
const path = require('path');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        this.lastId = 0;
    }

    initialize = () => {
        if (fs.existsSync(path.join(__dirname, `../db/${this.path}`))) {
            this.products = JSON.parse(fs.readFileSync(path.join(__dirname, `../db/${this.path}`), 'utf-8'));

            if (this.products.length > 0) {
                this.lastId = Math.max(...this.products.map((p) => p.id));
            }
        } else {
            fs.writeFileSync(path.join(__dirname, `../db/${this.path}`), JSON.stringify(this.products));
        }
    };

    save = (products) => {
        fs.writeFileSync(path.join(__dirname, `../db/${this.path}`), JSON.stringify(products));
    };

    getProducts = () => {
        return this.products;
    };

    addProduct = (product) => {
        const { title, description, price, stock, code } = product;
        if (!title || !description || !price || !stock || !code) {
            return 'Faltan datos necesarios';
        }
        if (this.products.some((p) => p.code === code)) {
            return `El code ${code} ya existe en la base de datos`;
        }
        this.lastId++;
        const newProduct = { ...product, id: this.lastId };
        this.products.push(newProduct);
        this.save(this.products);
        return 'El producto se agrego correctamente';
    };

    getProductById = (id) => {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            return 'Not Found';
        }
        return product;
    };

    editProduct = (id, product) => {
        const { title, description, price, stock, code } = product;
        const oldProduct = this.products.find((p) => p.id === id);
        if (!oldProduct) {
            return 'Not Found';
        }

        if (code && this.products.some((p) => p.code === code && p.id !== id)) {
            return `El code ${code} ya existe en la base de datos`;
        }

        const newProduct = { ...oldProduct, ...product };
        this.products[this.products.indexOf(oldProduct)] = newProduct;
        this.save(this.products);
        return `El producto con el id ${id} ha sido modificado con exito`;
    };

    deleteProduct = (id) => {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            return 'Not Found';
        }
        this.products = this.products.filter((p) => p.id !== id);
        this.save(this.products);
        return `Se borro el elemento con el id ${id}`;
    };
}

const productManager = new ProductManager('products.json');

const obj = { productManager, title: '12' };

productManager.initialize();
productManager.addProduct({ title: 'Manzana', description: 'Es una fruta', price: 200, stock: 15, code: 'AM15' });
productManager.addProduct({ title: 'Pera', description: 'Es una fruta', price: 300, stock: 125, code: 'PR15' });
productManager.addProduct({ title: 'Naranja', description: 'Es una fruta', price: 100, stock: 25, code: 'NJ15' });

module.exports = obj;
