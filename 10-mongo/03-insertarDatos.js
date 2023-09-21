
const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

//url: es la ruto de la conexión a la base de datos
const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL; 
console.log(MONGO_URL_LOCAL);

//Mongo Atlas
const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;
console.log(MONGO_URL_ATLAS);


// Para insertar un dato en Mongo, usamos el método insertOne()
// {nombre: "Pepe", edad: 25, profesion: "Programador"}


//Insertamos un dato en la colección empleados
MongoClient.connect(MONGO_URL_LOCAL, async (err, db) => {
    if(err) throw err;

    //seleccionamos la base de datos
    let dbo = db.db('ecommerce');

    //Documento a insertar en la database
    let documentoEmpleado = {
        nombre: "Pepe", 
        edad: 25, 
        profesion: "Programador"
    };

    await dbo.collection('empleados').insertOne(documentoEmpleado, (err, res) => {
        if(err) throw err;
        console.log(`Documento insertado en la colección empleados`);
        db.close();
    });

});