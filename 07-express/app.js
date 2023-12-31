//ES5 standard: commonjs
//const: nombre de la librería
const express = require('express');

// ejecutamos las funcionalidades de la librería requerida
const app = express();

//MIDDELWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Número del Puerto que va a escuchar el servidor
const PORTI = 9000 || 8080;

// otra forma de setear el puerto a mi servidor
const PORTII = 9000 ?? 3000;


//3306: SQL - MySQL
//3000: React.JS - create-react-app
//4200: Angular
//27017: MongoDB
//8080: Java - SpringBoot
//9000: Tomcat - Java - Apache

//seteo el puerto con los procesos de Node
//1. Instalamos dotenv: npm i dotenv
//2. Creamos un archivo .env en la raíz del proyecto
//Recordar agregar este archivo al .gitignore para evitar compartir passwords
//3. Importamos la librería para usarlo
const dotenv = require('dotenv');
dotenv.config();

//seteamos el puerto utilizando las .env de nuestra aplicación
PORT = process.env.PORT || 3000;

//Verbo HTTP => GET: solitud de recursos
//1. Ruta: / => raíz del sitio
//2. Callback: función que se ejecuta cuando se recibe una solicitud a la ruta
app.get('/', function(peticion, respuesta){

    console.log(peticion);
    console.log('==============================');
    console.log(peticion.url);
    console.log('==============================');
    console.log(peticion.method);
    console.log('==============================');

    //Son los procesos de Node que se ejecutan mientras la aplicación está viva
    console.log(process.env);

    respuesta.send(`
        <h1>
            Buenas!! Respuesta desde el Servidor: ${peticion.method} - ${peticion.url}
        </h1>
        <br>
        <h1 style="color: red">${process.env.PORT}</h1>`
    );
    
});

//otra ruta
app.get('/formulario', (req, res)=>{

    console.log(req.headers);

    console.log('==============================');

    res.send(`
    <div class="container">
    <!-- Content here -->
        <h1 class="text-center">Formulario de Contacto</h1>
        <form action="">
            <div class="mb-3">
                <label for="user" class="form-label">User</label>
                <input type="text" class="form-control" id="user">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <div class="m-5 text-center">
                <button type="button" onclick="agregarContactos()" class="btn btn-success w-50">Enviar Datos</button>
                <button type="reset" class="btn btn-danger w-50 mt-4">Borrar Datos</button>
            </div>
            <hr>
            <div class="m-5 text-center">
                <button type="button" onclick="imprimirContactos()" class="btn btn-warning w-75">Imprimir Datos</button>
            </div>
            <hr>
            <hr>
            <div class="m-5 text-center">
                <button id="miBoton" type="button" class="btn btn-info w-75">Escuchando Eventos</button>
            </div>
            <hr>
        </form>
    </div>
    `)

    //res.send();
    //res.end();
    //res.json();
    //res.sendFile('index.html);
    //res.download();
    //res.redirect();
    //res.render('nosotros);
});

//ruta para responder con un tipo de dato JSON
app.get('/json', (req, res)=>{
    console.log('==============================');
    console.log(req.url);
    console.log('==============================');


    //respondemos con un código de estado específico
    //https://developer.mozilla.org/es/docs/Web/HTTP/Status
    res.status('200').json({
        Respuesta: 'Respuesta desde el Servidor',
    });
});

app.get('/descargas', (req, res)=>{

    console.log('Archivo descargado');

    res.download('./paraDescarga.txt');
})

//Crear una función para que mi app entienda JSON - MIDDELWARES
//=> son funciones intermedias que procesan cosas antes de machear a las rutas
// los middelwares van con .use()

/* app.use((req, res, next)=>{
    console.log('==============================');
    console.log('Pasó por el MIDDELWARE');
    console.log('==============================');

    //setear el json para que lo entienda
    if(req.method == 'POST'){
        console.log('Soy un Post');
    }

    next();
}); */

//post
app.post('/enviar', (req, res)=>{

    console.log('==============================');
    console.log(req.body);
    console.log('==============================');
    
    //recibimos los datos
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    
    console.log('==============================');

    console.log(`Los datos recibidos son Nombre: ${nombre} y Apellido: ${apellido}`);

    res.send('Datos recibidos')
});

app.post('/separar', (req, res)=>{

    console.log('==============================');
    console.log('Desestructuración');
    console.log('==============================');
    
    const { nombre, apellido, edad, provincia, pais } = req.body;
    
    console.log('==============================');

    console.log(`Los datos recibidos son Nombre: ${nombre} y Apellido: ${apellido}, Edad: ${edad} y la Provincia es: ${provincia} en el país de: ${pais}`);

    res.json({
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad,
        Provincia: provincia,
        País: pais
    })
});


//put
//delete


app.listen(PORT, function(err){

    if (err) {throw err}

    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});






//ES6: Type module



//Typescript: Type module POO



