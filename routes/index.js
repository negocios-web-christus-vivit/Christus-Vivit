//express router
const express = require('express');
const router = express.Router();

// Importar express-validator
const { body } = require('express-validator');

// Importar el Controller

// TODO: Falta implementar el controlador
const articulosController = require('../controllers/articuloController')
const userController = require('../controllers/userController')


// importar el modelo de usuario
let Usuario = require('../models/user');

// forma de registro


module.exports = function () {

    // Rutas de articulos
    router.get('/', articulosController.articulosHome);


    // Rutas de User
    router.get('/register', userController.UserRegistration);
    router.post('/register', body('name').not().isEmpty(), body('email').not().isEmpty().isEmail(), body('username').not().isEmpty(),
        body('password').not().isEmpty(), body('password2').equals('password'), userController.GuardarUsuario);

    router.get('/login', userController.UserLogin);
    router.post('/login', body('username').not().isEmpty(),body('password').not().isEmpty(), userController.UserValidation);




    return router;
}

