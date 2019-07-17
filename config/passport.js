const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const db = require('./db');
const bcrypt = require('bcryptjs');



module.exports = function(passport){
    passport.use(new LocalStrategy(async (username, password, done) => {
        
        const usuario =  await User.findOne({where: { username : username}}).then(
            
        ).catch(error => console.log(error));

        
        if(!usuario){
            console.log('WASAAAAAAAA');
            return done(null, false, {message: 'No user found'})
        }
        

        bcrypt.compare(password, usuario.password, function(err, isMatch){
            console.log(usuario);
            if(err) throw err;
            if(isMatch){
                console.log('EXITOOOOOO');
                return done(null, usuario);
            }else{
                console.log('ERROOOOR');
                return done(null, false, {message: 'Contrasena incorrecta'})
            }
        });


    }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, usuario) {
        done(err, usuario);
        });
    });
}