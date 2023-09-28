
const { validationResult } = require('express-validator');

const userIndex = (req, res) => {
    res.render('index');
}

const userRegister = (req, res) => {
    res.render('registro');
}

const userCreate = (req, res) => {

    //Utilizamos la verificación de express-validator
    const errores = validationResult(req)
    
    //Si hay errores
    if(!errores.isEmpty()){
        console.log('tenemos un error de validación');
        res.json({errores: errores})
    }
    
    const {nombre, email, password } = req.body;

    console.log(`Datos recibidos ${nombre} - ${email} - ${password}`);

    res.json({
        nombre,
        email,
        password
    })
    
}

const userLogin = (req, res) => {}

module.exports = {
    userIndex,
    userRegister,
    userCreate,
    userLogin
}