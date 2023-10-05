
//1. Importamos la coleccion del users
import Users from '../models/userModel.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

export const userIndex = (req, res) => {
    res.render('index.hbs');
}

export const userRegister = (req, res) => {
    res.render('registro');
}

export const userFomLogin = (req, res) => {
    res.render('login');
}

export const userTable = (req, res) => {
    res.render('usuarios');
}

export const userCreate = async (req, res) => {

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
    const { nombre, email, password } = req.body;

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

        //Generamos la encriptación del password del usuario
        const salt = bcrypt.genSaltSync(10);
        console.log(`3. Salt: ${salt}`);

        //password del usuario
        console.log(`4. Password del user: ${usuarioNuevo.password}`);

        //Mezclamos la sal con el password del usuario
        usuarioNuevo.password = bcrypt.hashSync(password, salt);

        //Password con la sal de bcrypt
        console.log(`5. Password del user: ${usuarioNuevo.password}`);

        console.log(`6. Usuario Nuevo: ${usuarioNuevo}`);

        //Guardamos el usuario 
        await usuarioNuevo.save();

        return res.render('index', {
            nombre
        });

        
    } catch (error) {
        return res.render('error', {
            mensajeErrorData
        });
    }

    
}

export const userLogin = async (req, res) => {


    const { email, password} = req.body;

    console.log(`1. Los datos son: ${email}, ${password}`);

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

    try{

        const usuarioLogin = await Users.findOne({ email });

        console.log(`2. Usuario Login: ${usuarioLogin}`);

        if(!usuarioLogin){
            return res.render('registro');
        }

        const validacionPass = bcrypt.compareSync(password, usuarioLogin.password);

        console.log(`3. Validación Pass: ${validacionPass}`);

        if(validacionPass){
            return res.render('admin')
        }

    }catch{

        return res.render('error', {
            mensajeErrorData
        });

    }

}


/* export {
    userIndex,
    userRegister,
    userFomLogin,
    userCreate,
    userLogin,
    userTable
} */