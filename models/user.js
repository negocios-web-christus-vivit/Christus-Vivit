// Importar sequelize
const Sequelize = require('sequelize');
// Importar la configuración de la conexión con la BD
const db = require('../config/db');

const Articulo = require('./Articulo')

const slug = require('slug');

// Definición del modelo (Model)
const Usuario = db.define('usuario', {
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