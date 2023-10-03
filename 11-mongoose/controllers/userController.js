
//1. Importamos la coleccion del users
const Users = require('../models/userModel');
const { validationResult } = require('express-validator');


const userIndex = (req, res) => {
    res.render('index');
}

const userRegister = (req, res) => {
    res.render('registro');
}

const userFomLogin = (req, res) => {
    res.render('login');
}

const userCreate = async (req, res) => {

    //Utilizamos la verificación de express-validator
    const errores = validationResult(req)

    const mensajeError = 'Datos Incorrectos';
    const mensajeErrorData = 'Error en la Database';
    const mensajeErrorUser = 'El Usuario ya Existe';
    
    //Si hay errores
    if(!errores.isEmpty()){
        console.log('Tenemos un error de validación');
        return res.render('error', {
            mensajeError
        });
    }
    
    //Recibimos los datos
    const {nombre, email, password } = req.body;

    //Testeamos los datos
    console.log(`1. Datos recibidos ${nombre} - ${email} - ${password}`);

    //Intentamos la conexión 
    try {
        
        //Verificamos si el usuario existe
        let usuarioNuevo = await Users.findOne({ email });
        console.log(`2. ${usuarioNuevo}`);

        if(usuarioNuevo){
            return res.render('error', {
                mensajeErrorUser
            })
        }

        //Creamos el usuario 
        usuarioNuevo = new Users(req.body);

        console.log(`3. Usuario Nuevo: ${usuarioNuevo}`);

        //Guardamos el usuario 
        await usuarioNuevo.save();
        
    } catch (error) {
        return res.render('error', {
            mensajeErrorData
        });
    }

    res.json({
        nombre,
        email,
        password
    })
    
}

const userLogin = async (req, res) => {

    //Utilizamos la verificación de express-validator
    const errores = validationResult(req);

    const mensajeError = 'Email o Password incorrectos';
    const mensajeErrorData = 'Error en la Database';

        //Si hay errores
    if(!errores.isEmpty()){
        console.log('Tenemos un error de validación');
        return res.render('error', {
            mensajeError
        });
    }

    const { email, password} = req.body;
    console.log(email, password);

    try{
        // buscamos al usuario para logearlo
        let usuarioLogin = await Users.findOne({ email });
        console.log(`1. ${usuarioLogin.nombre}`)
        console.log(`2. ${usuarioLogin}`)

        let nombre = usuarioLogin.nombre;

        res.render('admin', {
            nombre
        });

    }catch{

        return res.render('error', {
            mensajeErrorData
        });

    }

}


module.exports = {
    userIndex,
    userRegister,
    userFomLogin,
    userCreate,
    userLogin
}