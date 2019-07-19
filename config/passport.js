const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const db = require('./db');
const bcrypt = require('bcryptjs');



module.exports = function (passport) {
    passport.use(new LocalStrategy(async (username, password, done) => {

        const user = await User.findOne({ where: { username: username } }).then(

        ).catch(error => console.log(error));


        if (!user) {
            console.log('WASAAAAAAAA');
            return done(null, false, { message: 'No user found' })
        }


        bcrypt.compare(password, user.password, function (err, isMatch) {
            console.log(user);
            if (err) throw err;
            if (isMatch) {
                console.log('EXITOOOOOO');
                return done(null, user);
            } else {
                console.log('ERROOOOR');
                return done(null, false, { message: 'Contrasena incorrecta' })
            }

            
        });

        passport.serializeUser(function (user, done) {
            done(null, user.id);
        });
    
        passport.deserializeUser(function(id, done){
            return done(null, user);    
        });

    }));

    
}