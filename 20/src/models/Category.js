const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define(
        'category',
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            name: { type: DataTypes.STRING, allowNull: false, unique: true },
        },
        {
            timestamps: false,
        }
    );
};
