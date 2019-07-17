
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const { body } = require('express-validator');


exports.UserRegistration  = async (req, res) => {
    // Obtener todos los proyectos
    // const articulo = await Articulo.findAll();

    res.render('register');
};

exports.UserLogin  = async (req, res) => {
    // Obtener todos los proyectos
    // const articulo = await Articulo.findAll();

    res.render('login');
};


exports.UserValidation  = function (req, res) {
    res.redirect('/', { user : req.user.username});
};


exports.GuardarUsuario  = async (req, res) => {
    // Obtener todos los proyectos
    // const articulo = await Articulo.findAll();

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log(name)
    let errores = [];
    
    if (!name && !email && !username && !password) {
        errores.push({'texto': 'Se encotraron errores'});
    }
   
    if (errores.length > 0) {
        console.log(errores)
        res.render('register');

    }else{
        let newUser = new User({
            name:name,
            email:email,
            username:username,
            password:password
        });

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt,  async function(err, hash){
                if(err){
                    console.log(err);
                }

                newUser.password = hash;
                
                await User.create({name: newUser.name, email: newUser.email, username: newUser.username, password: newUser.password});

                res.redirect('/login');
            });

        });
    }
        
    
};