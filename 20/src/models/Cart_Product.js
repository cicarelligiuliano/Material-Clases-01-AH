//Cart_Product.js
const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const { Cart, Product } = sequelize.models;
    sequelize.define(
        'cart_product',
        {
            cartId: { type: Sequelize.UUID, references: { model: Cart, key: 'id' } },
            productId: { type: Sequelize.UUID, references: { model: Product, key: 'id' } },
            quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        },
        {
            timestamps: false,
        }
    );
};
