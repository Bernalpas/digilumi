console.log('=========================================');
console.log('======== Funciones en JS ========');
console.log('=========================================');


function miFuncionSaludar(){
    console.log('Hola Mundo');
}

//para ejecutar una función la invocamos
miFuncionSaludar();

console.log('=========================================');

let nombre = 'Pepe'; //variable global

console.log('=========================================');

let uno = 150;
let dos = 250;

function sumar(numeroUno, numeroDos){ // variables locales
    let resultado = numeroUno + numeroDos;
    console.log(`El resultado de la suma es: ${resultado}`);
}

//invocar a la función 
sumar(800, 1000);
sumar(uno, dos);


console.log('=========================================');

function Multiplicar(numeroUno, numeroDos){ // variables locales
    let resultado = numeroUno * numeroDos;
    return resultado;

    console.log(`Estoy después del return`);
}

Multiplicar(1000, 50);

console.log(`El resultado de la multiplicación es ${Multiplicar(500, 50)}`);

console.log('=========================================');

//funciones con funciones como parámetro - callback

function dameResultado(a, b, callback) {

    let resultado = callback(a, b)

    console.log(`El resultado de la multiplicación es ${resultado}`);
    
}

console.log('=========================================');

//invocamos al callback
dameResultado(100, 50, Multiplicar);

console.log('=========================================');

//función flecha - ECMA 6
const pepe = () => {
    console.log('Soy una función flecha');
}

const otroPepe = (nombre) => {
    console.log(`Soy una función ${nombre}`)
}

const miOtroPepe = (nombre) => console.log(`Soy una función ${nombre}`);


pepe();
otroPepe('flecha');
miOtroPepe('Sin llaves en la función')

console.log('=========================================');



