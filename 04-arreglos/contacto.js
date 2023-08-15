

console.log('=========================================');
console.log('====== Contactos en JS ======');
console.log('=========================================');

let contactos = [];

function agregarContactos() {

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    //console.log(user);
    //console.log(password);

    let contacto = {
        usuario: user,
        pass: password
    }

    contactos.push(contacto);

    validarDatos(user, password);

}


function validarDatos(usuario, contrasenia) {

    //1. Validar los datos de los contactos



    //2. Validar si uno de los dos datos esta vacío


    //3. Si los dos datos que recibimos están vacíos, entonces no se agrega el contacto


        console.log(`Soy la función validarDatos y los datos que recibí son: ${usuario}, ${contrasenia}`);


}


function imprimirContactos() {

    console.log(contactos);
    
    for (let i = 0; i < contactos.length; i++) {
        console.log(contactos[i]);
    }

    //imprimimos el array de objeto
    for (let i = 0; i < contactos.length; i++) {
        console.log(`Los datos de clientes son: ${i} - ${contactos[i].usuario}`);
    }

}


const elementosDom = () => {

    //2. Obtenemos los elementos del DOM
    let enlace = document.getElementsByTagName('a')
    console.log(enlace);

    console.log(enlace[2].innerText);
    console.log(`La cantidad de anclas en este HTML es de: ${enlace.length}`);
    
    console.log(enlace[2].innerText = 'Nosotros');
    console.log('=========================================');
    
    console.log(enlace[2].href);
    
    console.log('=========================================');
    
    console.log(enlace[2].href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.20/dist/sweetalert2.all.min.js');
    
    console.log('=========================================');
    
    console.log(enlace[2].href);

    let botones = document.getElementsByTagName('button')
    console.log(botones);
}

//Método para generar eventos
let miBoton = document.getElementById('miBoton');

//agregamos un evento al botón
miBoton.addEventListener('click', (event) => {//e

    event.preventDefault();

    console.log('Estamos escuchando el evento click');

    console.log(event);

} );

