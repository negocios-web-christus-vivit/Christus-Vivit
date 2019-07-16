//express router
const express = require('express');
const router = express.Router();

// Importar express-validator
const { body } = require('express-validator');

// Importar el Controller

// TODO: Falta implementar el controlador
const articulosController = require('../controllers/articuloController')

module.exports = function(){
    router.get('/', articulosController.articulosHome);
    
    return router;
}