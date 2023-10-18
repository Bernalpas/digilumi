const createError = require('http-errors');
const express = require('express');
const path = require('path');
const hbs = require("hbs");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  res.render('index', {
    title: "Envío de Mail"
  });
});

app.post('/registro', (req, res)=>{

  const { nombre, email, password } = req.body;

  res.json({
    nombre,
    email,
    password
  });

})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server listening on port http://localhost:${PORT}`);
});

//module.exports = app;
