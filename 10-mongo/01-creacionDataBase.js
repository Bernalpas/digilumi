
//mongodb librería por defecto de la base de datos de Mongo
// npm i mongodb
const MongoClient = require('mongodb').MongoClient;

//url: es la ruto de la conexión a la base de datos
const url = 'mongodb://127.0.0.1:27017/ecommerce';

//use ecommerce


//usamos el método de conexion de MongoClient

MongoClient.connect(url, async (err, db) => {

    if(err) throw err;

    await console.log(`Base de datos conectada a ${url}`);

    db.close();

});



