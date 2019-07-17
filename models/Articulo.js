// Importar sequelize
const Sequelize = require('sequelize');
// Importar la configuración de la conexión con la BD
const db = require('../config/db');
// Importar slug
const slug = require('slug');
// Importar shortid
const shortid = require('shortid');

// Definición del modelo (Model)
const Articulo = db.define('articulo', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre : {
        type: Sequelize.STRING
    },

    cuerpo : {
        type: Sequelize.STRING
    },
    
    autor : {
        type: Sequelize.STRING
    },

    url : Sequelize.STRING
}, {
    hooks : {
        beforeCreate(articulo) {
            console.log('Antes de insertar en la base de datos');
            const url = slug(articulo.nombre).toLowerCase();

            articulo.url = `${url}-${shortid.generate()}`;
        },

        beforeUpdate(articulo) {
            console.log('Antes de actualizar en la base de datos');
            const url = slug(articulo.nombre).toLowerCase();

            articulo.url = `${url}-${shortid.generate()}`;
        }
    }
});

// Importar el modelo para poder utilizarlo
module.exports = Articulo;