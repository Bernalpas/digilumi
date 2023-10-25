var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Producto = require('./models/producto');
const { log } = require('console');
require('./models/producto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
}); */


app.get('/', (req, res) => {
  res.render('index', { title: 'Listado de productos' });
});

app.get('/producto', (req, res) => {
  res.render('producto',  { title: 'Formulario de Productos' });
});

app.get('/detalles', (req, res) => {

  res.render('detalles', { 
    title: 'Detalles de Productos',

    detalleProductos
  });

});



app.post('/producto', async (req, res) => {

  const { nombre, precio, imagen, descripcion } = req.body;

  console.log(nombre, precio, imagen, descripcion);

  try {

    let producto = new Producto({ nombre, precio, imagen, descripcion });
    
    console.log(producto);

    await producto.save();

    return res.render('producto', { title: 'Formulario de Productos' });
  } catch (error) {
    console.log(error);
    return res.render('error');
  }

});

app.get('/listarproducto', async (req, res) => {

  try {

    const todosProductos =  await Producto.find({});

    console.log(todosProductos);

    return res.render('listarproducto', { 
      title: 'Listado de productos', 
      todosProductos
    })
    
  } catch (error) {
    console.log(error);
    res.render('error');
  }

});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
