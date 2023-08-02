const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define(
        'cart',
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            subtotal: { type: DataTypes.FLOAT, defaultValue: 0.0 },
            total: { type: DataTypes.FLOAT, defaultValue: 0.0 },
            ordered: { type: DataTypes.BOOLEAN, defaultValue: false },
        },
        { timestamps: false }
    );
};
