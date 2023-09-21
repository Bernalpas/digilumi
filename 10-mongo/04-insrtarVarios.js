const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL; 

const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;

MongoClient.connect(MONGO_URL_LOCAL, async (err, db) => {
    if(err) throw err;

    let dbo = db.db('ecommerce');

    let documentoEmpleado = [ 
            { 
                nombre: "Juan", 
                edad: 25, 
                profesion: "Database"
            },
            { 
                nombre: "María", 
                edad: 25, 
                profesion: "Marketing"
            },
            { 
                nombre: "Pepito", 
                edad: 25, 
                profesion: "Programador"
            },
            { 
                nombre: "Juana", 
                edad: 25, 
                profesion: "Administración"
            },
            { 
                nombre: "Juancito", 
                edad: 25, 
                profesion: "Tester"
            }
        ];

    await dbo.collection('empleados').insertMany(documentoEmpleado, (err, res) => {
        if(err) throw err;
        console.log(`Documentos insertados en la colección empleados: ${res.insertedCount} datos`);
        db.close();
    });

});