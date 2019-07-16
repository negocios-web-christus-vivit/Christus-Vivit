// Importar los módulos de express
const express = require('express');
// Importar las rutas disponibles
const routes = require('./routes');
// Importar los módulos para direcciones (path)
const path = require('path');
// Importar los módulos para utilizar body parser
const bodyParser = require('body-parser');

// Crear la conexión con la Base de Datos
const db = require('./config/db');

// Importar los modelos
require('./models/Articulo');
require('./models/User');