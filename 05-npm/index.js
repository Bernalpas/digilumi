
//1. Utilizamos un módulo nativo de NodeJS para crear un servidor web

const http = require('node:http'); 

//2. Necesitamos un puerto para que mi servidor escuche las peticiones de los clientes
const PORT = 8080;

const server = http.createServer((require, response)=>{

    console.log('=====================================');
    console.log(require);
    console.log('=====================================');
    console.log('Arrancando el Back!!!');
    console.log('=====================================');

    response.writeHead(200, {'Content-Type': 'text/html' });

    response.end(`<h1 style="color: red">Respondiento desde el Backend a tu Petición</h1>`);
});


//3. Ponemos a nuestro servidor a la escucha en el puerto 8080
//server.listen(5000, ()=>{})
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando Peticiones en el Puerto http://localhost:${PORT}`);
});





