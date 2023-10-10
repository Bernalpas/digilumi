
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const jwt = require('./jwt');
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

//Es un arreglo que hace de database
const usuarios = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a mi API'
    });
})


//1. Creamos un usuario
//2. Le asignamos un token 
//3. Renderizamos la página del admin
app.post('/login', (req, res) => {

    const { email, password } = req.body;

    console.log(`Los datos recibidos son ${email} y ${password}`);

    //Buscamos el user en nuestro array/arreglo/
    let usuario = usuarios.find(usuario => usuario.email === email);

    console.log(`1. Usuario: ${usuario}`);


    try {
        
        if(usuario){
    
            let loginOk = usuario.password === password && usuario.email === email;
    
            console.log(`2. Login OK: ${loginOk}`);
    
            if(loginOk){
            
                const token = jwt.generarToken(usuario.nombre, email)
    
                console.log(`3. El token generado es ${token}`);
    
                res.header("x-auth-token", token).send({
                    email: email,
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


app.post('/registro', (req, res) => {

    const { nombre, email, password } = req.body;

    usuarios.push({nombre: nombre, email: email, password: password});

    for (let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i]);    
    }

    res.send(`<h1>Tus datos han sido registrados</h1>`);

});




app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port http://localhost:${PORT}`);
})

