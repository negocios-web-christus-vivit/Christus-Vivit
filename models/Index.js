// Importar Sequelize
const Sequelize = require('sequelize');

// Importar Slug

// Importar  la base de datos
const db = require('../config/db');

// Definir modelos de trabajo 
const Index = db.define('index', {
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    articulo: {
        type:Sequelize.STRING
    },

    // TODO: Posiblidad de mas campos para el modelo

    url: Sequelize.STRING

},{
    hooks: {
        
        // Registrar datos
        beforeCreate(index) {

            console.log('REGISTRAR');
            const url = slug(index.articulo).toLowerCase();
            
            index.url = `${url}-${shortid.generate()}`;
            
        },

        // Actuañizar datos
        beforeUpdate(index) {

            console.log('ACTUALIZAR');
            const url = slug(index.articulo).toLowerCase();
            index.url = `${url}-${shortid - generate()}`;
            
        }
        
    }
}


);


// Importar el modelo para ser utilizado
module.exports = Index;