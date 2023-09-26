const express = require('express');
//const app = express();
const app = require('express')();

//const dotenv = require('dotenv');
//dotenv.config();
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
//const userRouter = require('./router/userRouter');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/user', require('./routes/userRouter'));
//app.use('/user', userRouter);

//Configuramos el motor de plantillas de Handlebars
app.set('view engine', 'hbs');

//Seteamos el path del directorio de las vistas
app.set('views', path.join(__dirname, '/views'));

//Seteamos el path del directorio de los parciales
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/formulario', (req, res) => {
    res.render('formulario');
});

app.get('/inicio', (req, res) => {
    res.render('inicio');
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

server.on('Error: ', (error) => {
    console.log(`Server is not running because of ${error}`);
});
