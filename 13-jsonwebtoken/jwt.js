require('dotenv').config();
const jwt = require('jsonwebtoken');
const clave = process.env.CLAVEJWT;


//1. Creamos una función para firmar nuestro token
const generarToken = (nombre, email) => {

    console.log(clave);

    const token = jwt.sign({
        nombre: nombre,
        email: email
    }, clave, {
        expiresIn: '60s'
    });

    return token;

}

const auth = (req, res, next) => {





    next();

};

module.exports = {
    generarToken,
    auth
}