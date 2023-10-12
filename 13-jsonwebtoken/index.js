
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const jwt = require('./jwt');
const hbs = require('hbs');
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

//Es un arreglo que hace de database
const usuarios = [];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


//Configuramos el motor de plantillas de Handlebars
app.set('view engine', 'hbs');

//Seteamos el path del directorio de las vistas
app.set('views', path.join(__dirname, '/views'));

//Seteamos el path del directorio de los parciales
hbs.registerPartials(path.join(__dirname, '/views/partials'));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/usuarios', (req, res) => {
    res.render('usuarios');
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
    
                res.header("x-auth-token", token).render('usuarios', {
                    nombre: usuario.nombre
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

//ruta que necesita del token para acceder
app.get('/datos', jwt.auth, (req, res) => {

    res.json({
        datos: 'Tenemos tu token'
    })
});




app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port http://localhost:${PORT}`);
})

