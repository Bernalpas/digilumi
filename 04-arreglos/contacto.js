

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


