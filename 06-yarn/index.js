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
    
    console.log(require.method);
    
    console.log('=====================================');
    console.log(require.url);
    console.log('=====================================');
    console.log(require.headers);
    console.log('=====================================');
    console.log(require.body);

    const ruta = require.url;

    console.log(`La ruta que solicita el cliente es ${ruta}`);

    //creamos rutas para macht
    if(ruta == '/'){
        
        response.writeHead(200, {'Content-Type': 'text/html' });
    
        response.end(`
        <h1 style="color: green">
            Respondiento desde el Backend a tu Petición
        </h1>`);

    }else if(ruta == '/formulario'){

        response.end(`
        <div class="container">
        <!-- Content here -->
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

    }else{

        response.end(`
        <h1 style="color: red">
            Página No encontrada!!
        </h1>`);
    }



});


//3. Ponemos a nuestro servidor a la escucha en el puerto 8080
//server.listen(5000, ()=>{})
server.listen(PORT, ()=>{
    console.log(`Servidor escuchando Peticiones en el Puerto http://localhost:${PORT}`);
});
