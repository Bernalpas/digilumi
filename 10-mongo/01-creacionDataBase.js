
const dotenv = require('dotenv');
dotenv.config();

//mongodb librería por defecto de la base de datos de Mongo
// npm i mongodb
const MongoClient = require('mongodb').MongoClient;

//url: es la ruto de la conexión a la base de datos
const MONGO_URL_DB = process.env.MONGO_URL_DB; 
console.log(MONGO_URL_DB);

//Mongo Atlas
const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;
console.log(MONGO_URL_ATLAS);

//use ecommerce

//usamos el método de conexion de MongoClient
MongoClient.connect(MONGO_URL_ATLAS, async (err, db) => {

    if(err) throw err;

    await console.log(`Base de datos conectada a ecommerce`);

    db.close();
});






