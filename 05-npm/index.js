
//1. Utilizamos un módulo nativo de NodeJS para crear un servidor web

const http = require('node:http');

// modulo nativo de Node.JS: File System
const fs = require('node:fs');

//2. Necesitamos un puerto para que mi servidor escuche las peticiones de los clientes
const PORT = 8080;

const server = http.createServer((require, response)=>{

    console.log('=====================================');
    //console.log(require);
    console.log('=====================================');
    console.log('Arrancando el Back!!!');
    console.log('=====================================');

    // creamos una variable para obtener las rutas de la petición
    const rutas = require.url;

    switch (rutas) {
        case '/': {
            response.writeHead(200, {'Content-Type': 'text/html' });
    
            response.end(`
            <h1 style="color: green">
                Respondiento desde el Backend a tu Petición
            </h1>`);
        }
        break;
        case '/leer': {

            //leemos archivos de tipo string
            const datos = fs.readFileSync('./archivo.txt', 'utf-8');

            //imprimimos en consola los datos leidos
            console.log(datos);

            response.end(`
            <h1>
                Datos Impresos en la consola
            </h1>`);

        }   
        break;
        default:{
            response.end(`
                <h1 style="color: red">
                    Página No encontrada!!
                </h1>
                `);
        }
    }

    response.writeHead(200, {'Content-Type': 'text/html' });

    response.end(`<h1 style="color: red">Respondiento desde el Backend a tu Petición</h1>`);
});


//3. Ponemos a nuestro servidor a la escucha en el puerto 8080
//server.listen(5000, ()=>{})
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando Peticiones en el Puerto http://localhost:${PORT}`);
});





