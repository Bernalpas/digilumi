const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL; 

//Controlador de Usuarios
// CRUD

//R: read => leer los datos de la database
function listarUsuarios(req, res) {
    res.send(`<h1>Listamos todos los Usuarios</h1>`);
}


//C: create => crear un nuevo usuario
const crearUsuarios = (req, res) => {
    const { user, password } = req.body;

    //ejemplo de datos de usuario

    MongoClient.connect(MONGO_URL_LOCAL, async (err, db) => {
        if(err) throw err;
    
        //seleccionamos la base de datos
        let dbo = db.db('ecommerce');
    
        //Documento a insertar en la database
        let documentoEmpleado = {
            nombre: user,
            password: password
        };
    
        await dbo.collection('empleados').insertOne(documentoEmpleado, (err, res) => {
            if(err) throw err;
            console.log(`Documento insertado en la colección empleados`);
            db.close();
        });
    
    });


    let userData = 'Pepe';
    let passData = '1234';

    console.log('=========================');
    console.log(`Los datos recibidos son: ${user} y ${password}`);
    console.log('=========================');

    //res.status(200).send('Tus Datos han sido recibidos')

    if(user == '' || password == ''){
        res.redirect('/error.html');
    }else if(user == userData && password == passData){
        res.redirect('/admin.html');
    }else if(user != userData && password != passData){
        res.redirect('/error.html');
    }
}


//U: update => actualizar los datos de un usuario
const actualizarUsuarios = (req, res) => {

    let user = req.params.id

    //console.log(req);
    console.log('=========================');
    console.log(req.params.id);
    console.log('=========================');
    res.send(`<h1 style="color: green">Actualizamos a un Usuario con el ID: ${user}</h1>`);

}

//D: delete => eliminar los datos de un usuario
const eliminarUsuarios = (req, res) => {

    let user = req.params.id;

    res.send(`<h1 style="color: red">Usuario Eliminado con el ID: ${user}</h1>`);

}

module.exports = {
    listarUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios
}

