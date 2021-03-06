// Importar los módulos de express
const express = require('express');
// Importar las rutas disponibles
const routes = require('./routes');
// Importar los módulos para direcciones (path)
const path = require('path');
// Importar los módulos para utilizar body parser
const bodyParser = require('body-parser');
// Importar los módulos para utilizar passport
const passport = require('passport')

const session = require("express-session")


// Crear la conexión con la Base de Datos
const db = require('./config/db');

// Importar los helpers con funciones en común para el proyecto
const helpers = require('./helpers');

// Importar los modelos
require('./models/Articulo');
require('./models/User');

//Configuracion de passport
require ('./config/passport')(passport);

// Realizar la conexión
// Sequelize se conecta mediante promises
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
db.sync()
    .then(() => console.log('Conectado al servidor de BD'))
    .catch(error => console.log(error));


// Crear una App de express
const app = express();

// Desde dónde se cargan los archivos estáticos
app.use(express.static('public'));
app.use(session({ secret: "cats" }));
// requerido para iniciar passport
app.use(passport.initialize());
app.use(passport.session());


// Habilitar Pug como nuestro Template Engine
app.set('view engine', 'pug');

// Habilitar BodyParser para leer los datos de los formularios
app.use(bodyParser.urlencoded({extended: true}));

// Pasar el vardump a la aplicación (middleware)
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
});
// Añadir la carpeta (ruta) que contiene las View (vistas)
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

// Inicializar el servidor de express en un puerto
app.listen(9999);