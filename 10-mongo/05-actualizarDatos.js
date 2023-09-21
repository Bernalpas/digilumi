
const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL; 

const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;

MongoClient.connect(MONGO_URL_LOCAL, async (err, db) => {
    if(err) throw err;

    let dbo = db.db('ecommerce');

    let paraActualizar = {
        nombre: "Pepe"
    }

    
    let datoActualizado = {
        $set: {
            nombre: "Antonio"
        }
    };

    await dbo.collection('empleados').updateOne(paraActualizar, datoActualizado, (err, res) => {
        if(err) throw err;
        console.log(`Documento actualizado en la colección empleados`);
        db.close();
    });

});