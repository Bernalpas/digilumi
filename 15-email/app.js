const createError = require('http-errors');
const express = require('express');
const path = require('path');
const hbs = require("hbs");
const nodemailer = require('nodemailer');
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

  //Función para enviar un Email al cliente que se registra
  const enviarEmail = async () => {

    //configuramos el trasportador del email
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS
      }
    });

    //configuramos el email de respuesta al cliente que se registra
    let emailData = await transporter.sendMail({
      from: process.env.EMAILUSER,
      to: email,
      subject: 'Gracias por registrarse en nuestra App',
      html: `<h1>Bienvenido ${nombre} a nuestra Comunidad</h1> <br>
      A partir de este momento recibirás todas las novedades de nuestra comunidad <br>
      Saludos y muy buena jornada <br>
      <a href="https://www.educacionit.com/" target="_blank">Visitanos</a> para ver mas!! <br>`
    })
  };

  enviarEmail()
  .then(()=>{
    console.log("Email enviado");
  }).catch((error)=>{
    console.log(error);
  });

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
