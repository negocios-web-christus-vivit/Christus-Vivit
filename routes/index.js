//express router
const express = require('express');
const router = express.Router();
const passport = require('passport');

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
    router.get('/ver_articulos', articulosController.ariculosHome2)
    router.get('/crear_articulos', articulosController.wysiwyg);
    router.post('/crear_articulo',  body('content').not().isEmpty(), body('titulo').not().isEmpty(),articulosController.nuevoArticulo);


    // Rutas de User
    router.get('/register', userController.UserRegistration);
    router.post('/register', body('email').not().isEmpty().isEmail(), body('username').not().isEmpty(),
        body('password').not().isEmpty(), body('password2').equals('password'), userController.GuardarUsuario);

    router.get('/login', userController.UserLogin);
    router.post('/login', function (req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login'
        })(req, res, next);
    });

    // Logout
    router.get('/logout', function (req, res) {
        req.logOut();
        res.redirect('/login');
    });





    return router;
}

