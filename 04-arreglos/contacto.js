

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
    
    /*     if(user == 'Pepe' && password == '12345'){
            alert('Bienvenido a la app')
        }else{
            alert('Error')
        }
     */

        console.log(`Soy la función validarDatos y los datos que recibí son: ${usuario}, ${contrasenia}`);


}


function imprimirContactos() {

    console.log(contactos);
    
    for (let i = 0; i < contactos.length; i++) {
        console.log(`Los datos de clientes son: ${i} - ${contactos[i]}`);
    }

}


