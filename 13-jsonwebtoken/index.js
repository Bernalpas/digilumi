
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const jwt = require('./jwt');
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

const usuarios = [];

usuarios.push({nombre: 'Pepe', password: '123456789'});

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i]);    
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a mi API'
    });
})

app.post('/login', (req, res) => {

    const { nombre, password } = req.body;

    console.log(`Los datos recibidos son ${nombre} y ${password}`);

    //Buscamos el user en nuestro array/arreglo/
    let usuario = usuarios.find(usuario => usuario.nombre === nombre);

    console.log(`1. Usuario: ${usuario}`);


    try {
        
        if(usuario){
    
            let loginOk = usuario.password === password && usuario.nombre === nombre;
    
            console.log(`2. Login OK: ${loginOk}`);
    
            if(loginOk){
            
                const token = jwt.generarToken(nombre, password)
    
                console.log(`3. El token generado es ${token}`);
    
                res.header("x-auth-token", token).send({
                    nombre: nombre,
                });
            }else{
                
                return res.json({
                    mensaje: "Error en el login"
                })
            }
    
        }else{
    
            return res.json({
                mensaje: "Usted no está registrado"
            })
    
        }

    } catch (error) {
        
        return res.json({
                mensaje: "nuestros mejores ingenieros trabajan para solucionarlo"
            })

    }

});


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port http://localhost:${PORT}`);
})

