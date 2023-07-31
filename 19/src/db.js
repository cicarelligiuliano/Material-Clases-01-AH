const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');

const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/cursoah', {
    logging: false,
    native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries);

const { Student, Teacher, Course, Grade } = sequelize.models;

//A PARTIR DE ESTE PUNTO, VAN LAS RELACIONES!!!!!
Student.belongsTo(Course);
Course.hasMany(Student);

Teacher.belongsToMany(Course, { through: 'teacher-course' });
Course.belongsToMany(Teacher, { through: 'teacher-course' });

Student.hasOne(Grade);
Grade.belongsTo(Student);

module.exports = { conn: sequelize, ...sequelize.models };
