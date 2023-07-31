const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'grade',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            chemistry_grade: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            math_grade: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
