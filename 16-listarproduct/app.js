var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Producto = require('./models/producto');
const Eliminado = require('./models/eliminados');
const mongoose = require('mongoose');
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

app.get('/update/:_id', async (req, res) => {

  console.log(req.params._id);

  const id = req.params._id;

  try {

    const actualizar =  await Producto.findById(id);

    console.log(actualizar);

    return res.render('actualizar', { 
      title: 'Formulario de Actualización de Productos', 
      actualizar, 
      id
    })
    
  } catch (error) {
    console.log(error);
    res.render('error');
  }

});

app.get('/eliminar/', (req, res) => {

  //console.log(req.params._id);

  res.render('eliminar', { 
    title: 'Eliminando algún Producto'
  });

});


app.get('/detalles/:_id', async (req, res) => {

  console.log(req.params._id);

  const id = req.params._id;

  //convertir un id en objeto de mongo
  //const ObjectId = mongoose.Types.ObjectId;
  //const idObj = new ObjectId(id);

  //console.log(idObj);

  try {

    let producto =  await Producto.findById(id);
    
    console.log(producto);


    res.render('detalles', { 
      title: 'Detalles del producto', 
      id,
      producto     
    });

  } catch (error) {
    console.log(error);
    return res.render('error');
  }

});

app.post('/delete/:_id', async (req, res) => {

  console.log(req.params._id);

  const id = req.params._id;

  try {

    /* let dato =  await Producto.findById(id);
    
    const { nombre, precio, imagen, descripcion } = dato;
    
    console.log(nombre, precio, imagen, descripcion);
    
    let eliminado = new Eliminado(dato);

    console.log(eliminado); */

    let producto =  await Producto.findByIdAndDelete(id);
    
    console.log(producto);
    
    console.log('=====================================================');
    //await dato.save();
    console.log('=====================================================');


    res.render('eliminar', { 
      title: 'Producto eliminado', 
      id    
    });

  } catch (error) {
    console.log(error);
    return res.render('error');
  }

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

app.post('/update/:_id', async (req, res) => {

  console.log(req.params._id);

  const id = req.params._id;

  try {

    const dato = req.body;

    console.log(dato);

    const actualizar =  await Producto.findByIdAndUpdate(id, dato, { new: true });

    console.log(actualizar);

    return res.render('actualizado', { 
      title: 'Actualización de Productos Correcta'
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
