// Importar sequelize
const Sequelize = require('sequelize');
// Importar la configuración de la conexión con la BD
const db = require('../config/db');

const slug = require('slug');

// Definición del modelo (Model)
const Usuario = db.define('usuario', {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },

    email : {
        type: Sequelize.STRING,
        allowNull: false
    },

    username : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    password : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Importar el modelo para poder utilizarlo
module.exports = Usuario;