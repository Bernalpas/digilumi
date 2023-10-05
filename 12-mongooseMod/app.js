import express from 'express';
import path from 'path';
import cors from 'cors';
import hbs from 'hbs';
import morgan from 'morgan';
import userRouter from './router/userRouter.js';
import * as url from 'url';
const app = express();

const __dirname = path.resolve();
//const __dirname = url.fileURLToPath(import.meta.url);
const __filename = url.fileURLToPath(import.meta.url);

console.log(__dirname);
console.log(__filename);

app.use(cors());
app.use(morgan('dev'));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

console.log(path.join(__dirname, '/public'));

//Configuramos el motor de plantillas de Handlebars
app.set('view engine', 'hbs');

//Seteamos el path del directorio de las vistas
app.set('views', path.join(__dirname, '/views'));

console.log(path.join(__dirname, '/views'));
console.log(path.join(__filename, '/views'));

//Seteamos el path del directorio de los parciales
hbs.registerPartials(path.join(__dirname, '/views/partials'));

//app.use('/user', require('./routes/userRouter'));
app.use('/', userRouter);

//sólo puede haber un export default por archivo
export default app;