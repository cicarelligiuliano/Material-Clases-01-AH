const { Sequelize, DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexión a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'student',
        {
            /*ATRIBUTOS DEL MODELO*/
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            /*OPCIONES EXTRAS*/
            timestamps: false,
        }
    );
};
