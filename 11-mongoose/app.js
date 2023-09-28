const express = require('express');
//const app = express();
const app = require('express')();

//const dotenv = require('dotenv');
//dotenv.config();
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const userRouter = require('./router/userRouter');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Configuramos el motor de plantillas de Handlebars
app.set('view engine', 'hbs');

//Seteamos el path del directorio de las vistas
app.set('views', path.join(__dirname, '/views'));

//Seteamos el path del directorio de los parciales
hbs.registerPartials(path.join(__dirname, '/views/partials'));

//app.use('/user', require('./routes/userRouter'));
app.use('/', userRouter);

//exportamos la app para que el server.js levante la aplicación
module.exports = app;