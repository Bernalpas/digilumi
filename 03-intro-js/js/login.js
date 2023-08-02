

console.log('=========================================');
console.log('====== Ejercicios de Ventas ======');
console.log('=========================================');

//Datos desde la Database
let user = 'pepe';
let pass = '123456Po'

//tomamos los datos del cliente
let usuario = prompt('Ingrese su Nombre de User: ');
let password = prompt('Ingrese su Password: ');

//procesamos la info y guiamos al usuario

/* if (user == usuario && pass == password) {

    console.log('Bienvenico Pepe al sistama de administración');
    location.href = 'admin.html'

} else if (user != usuario) {

        alert('Usuario inscorrecto, intente de nuevo')
        location.href = 'ventas.html'
    
} else {
    console.log('Usuario o password incorrecto');
    location.href = 'error.html'
} */


if (user == usuario && pass == password) {

    console.log('Bienvenico Pepe al sistama de administración');
    location.href = 'admin.html'

} else {
    console.log('Usuario o password incorrecto');
    location.href = 'error.html'
}
