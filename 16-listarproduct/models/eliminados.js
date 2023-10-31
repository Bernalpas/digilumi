const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URL = process.env.MONGO_URL_LOCAL;


mongoose.connect(URL,{
    useNewUrlParser: true,
}).then(() => {
    console.log('Conectado a la base de datos');
}).catch(err => console.log(err));


const Eliminado = mongoose.model('Eliminado',{
    nombre: String,
    precio: Number,
    imagen: String,
    descripcion: String
});

module.exports = Eliminado;