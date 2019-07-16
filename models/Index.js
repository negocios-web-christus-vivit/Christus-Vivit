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

    // TODO: Posiblidad de mas campos para el modelo

    url: Sequelize.STRING

},{
    hooks: {
        

        beforeCreate(index) {

            console.log('Antes de Registrar');
            // const url = slug(index)

            // TODO: REGISTRAR DATOS 
            
        },
        beforeUpdate(index) {


            // TODO: ACTUALIZAR DATOS
            
        }
        
    }
}


);


// Importar el modelo para ser utilizado
module.exports = Index;