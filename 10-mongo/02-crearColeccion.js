


//mongodb librería por defecto de la base de datos de Mongo
// npm i mongodb
const MongoClient = require('mongodb').MongoClient;

//url: es la ruto de la conexión a la base de datos
const url = 'mongodb://127.0.0.1:27017/';

MongoClient.connect(url, async (err, db) => {

    if(err) throw err;

    let dbo = db.db('ecommerce')

    let coleccion = 'empleados';

    await console.log(`Base de datos conectada a ${dbo}`);

    //creamos la colección
    dbo.createCollection(coleccion, (err, colection) => {
        if(err) throw err;
        console.log(`Colección ${colection} creada en la Base de datos: ${dbo}`);
        db.close();
    });
});


//blog.createCollection('clientes')

//db => blog