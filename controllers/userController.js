
const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.UserRegistration  = async (req, res) => {
    // Obtener todos los proyectos
    // const articulo = await Articulo.findAll();

    res.render('register');
};


exports.GuardarUsuario  = async (req, res) => {
    console.log('entro');
    // Obtener todos los proyectos
    // const articulo = await Articulo.findAll();

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;
    
    req.checkBody('Name', 'Name is required').notEmpty();
    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('email', 'email is not valid').isEmail();
    req.checkBody('password', 'password is required').notEmpty();
    req.checkBody('passwoed2', 'passwords do not match').equals(req.body.password);

    let errors = req.validationErrors();

    if(errors){
        res.render('register',{
            errors:errors
        });
    }else{
        let newUser = new User({
            name:name,
            email:email,
            username:username,
            password:password
        });

        bcrypt.getSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt,  async function(err, hash){
                if(error){
                    console.log(err);
                }
                newUser.password = hash;
                await User.create(newUser);
                req.flash('succes', 'Puedes loggearte ahora');

                res.redirect('/');
            });

        });
    }
};