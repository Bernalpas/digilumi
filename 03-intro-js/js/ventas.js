
console.log('=========================================');
console.log('====== Efjercicios de Operadores en JS ==');
console.log('=========================================');

let cantidadProductos = 0
let saldoTarjetaEfectivo = 5000;
let precioProducto = 5001;
let cantidadVenta = 0
let stockProducto = 100;
let saldoTarjetaCuotas = true;

if (saldoTarjetaEfectivo >= precioProducto || saldoTarjetaCuotas) {
    console.log('Compra realizada, muchas gracias!!');

    //sumamos los productos comprados
    cantidadProductos++;

    //restamos el producto vendido del stock
    stockProducto--;

    //restamos el costo del producto comprado
    saldoTarjetaEfectivo = saldoTarjetaEfectivo - precioProducto; //

    console.log(`Cliente: compró ${cantidadProductos} producto/s`);
    console.log(`Cliente: su saldo en la Tarjeta es de: ${saldoTarjetaEfectivo} pesos` );

    //sumamos la cantidad de productos vendidos
    cantidadVenta++;
    console.log('===================================================');
    console.log(`Admin: La cantidad de ventas hasta ahora es de: ${cantidadVenta} producto/s`);
    console.log(`Admin: El dinero disponible en caja es de: ${precioProducto}`);
    console.log(`Admin: El stock disponible es de: ${stockProducto}`);

}else {
    console.log('No se realizó la compra');
}


console.log('=========================================');
console.log('=========================================');

//Bucles: ciclos que repiten código según la necesidad
let productos = [];
let persona = ['Pepe', 'Pérez', 123456789, 'San Martín 1200', true, 'Misiones'];//n-1=5

console.log(`Los productos son: ${productos}`);
console.log(`La cantidad de productos son: ${productos.length}`);
console.log(`La cantidad de datos de la persona es: ${persona.length}`);

console.log(persona[0]);
console.log(persona[1]);
console.log(persona[2]);
console.log(persona[3]);
console.log(persona[4]);
console.log(persona[5]);

//Bucle for
//       inicio         limite/final        paso
for (let index = 0; index < persona.length; index++ ) {
    console.log(`Los datos son: ${persona[index]}`);
    
}

console.log('=========================================');

for (let i = 0; i < persona.length; i++ ) {
    console.log(`Los datos son: ${persona[i]}`);
    
}


console.log('=========================================');

for (let i = 0; i <= 100; i += 10 ) {
    console.log(`Los datos son: ${i}`);
    
}

console.log('=========================================');
console.log('======== Switch - While   ===============');
console.log('=========================================');

/* if(){
    if(){
        if(){
            if(){

            }
        }
    }
} */

let dia = 'miércoles'

switch (dia) {
    case 'lunes':
        console.log('Hoy tenemos clases');
        break;
    case 'martes': 
        console.log('Hoy no tenemos clases');
        break;
    case 'miércoles':
        console.log('Hoy Sí tenemos clases');
        break;
    case 'jueves':
        console.log('Hoy No tenemos clases');
        break;
    case 'viernes':
        console.log('Jugamos');
        break
    case 'sábado':
        console.log('Paseamos');
        break
    case 'domingo':
        console.log('Descansamos');
        break;
    default:
        console.log('No corresponde a ningún día de la semana');
}

console.log('=========================================');

if(dia == 'lunes'){
    console.log('Hoy tenemos clases');
}else if(dia = 'martes'){
    console.log('Hoy no tenemos clases');
}


console.log('=========================================');


let numero = prompt('Introduce un número para el While: ');
let inicio = 0;


while ( inicio <= numero ) {
    alert(`Contamos hasta ${numero} y estamos en ${inicio}`)
    console.log(`Contamos hasta ${numero} y estamos en ${inicio}`);



    //no olvidar el límite para el bucle
    inicio++;
}

