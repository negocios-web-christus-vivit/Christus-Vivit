// Importar Sequelize
const Sequelize = require('sequelize');

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
});


// Importar el modelo para ser utilizado