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
        expiresIn: '1h'
    });

    return token;

}

const auth = (req, res, next) => {

    //1. Obtenemos el token de la petición
    const token = req.header('x-auth-token');


    console.log(req.header('x-auth-token')); 

    //2. Si no tiene token, lo sacamos de la navegación
    if(!token){
        console.log('No hay token');

        return res.json({
            mensaje: 'No podemos dejarte navegar'
        })

    }

    //3.Si tiene token, verificamos la firma
    try {
        const macht = jwt.verify(token, clave);
        console.log(`El token es válido: ${macht}`);
    } catch(err) {
        return res.json({
            mensaje: 'No podemos dejarte navegar'
        })
    }


    next();

};

module.exports = {
    generarToken,
    auth
}