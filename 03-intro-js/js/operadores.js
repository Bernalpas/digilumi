
console.log('=========================================');
console.log('====== Operadores en JS ======');
console.log('=========================================');

// Operadores aritméticos
//  + - * / % 

let miNumero = 5000;
let otroNumero = 200;
let resultado;

resultado = miNumero + otroNumero;
console.log(`El resultado de la SUMA es ${resultado}`);

resultado = miNumero - otroNumero;
console.log(`El resultado de la RESTA es ${resultado}`);

resultado = miNumero * otroNumero;
console.log(`El resultado de la MULTIPLICACIÓN es ${resultado}`);

resultado = miNumero / otroNumero;
console.log(`El resultado de la DIVISIÓN es ${resultado}`);

resultado = miNumero % otroNumero;
console.log(`El resultado de la MÓDULO es ${resultado}`);

console.log('=========================================');

//funciones para convertir string a números
//parseInt()
//parseFloat()
//Number()

let data = parseInt(prompt('Ingrese un número para la Calculadora: '));
let convertido = parseInt(data)
let dataDos = parseInt(prompt('Ingrese otro número para la Calculadora: '));

resultado = data + dataDos;

alert(`El resultado de la SUMA es ${resultado}`)

console.log('=========================================');

//Contador
let contador = 0;
console.log(`El contador está en ${contador}`);

//Incremento
contador = contador + 1;
console.log(`El contador está en ${contador}`);

contador++ //incremento con paso 1
console.log(`El contador está en ${contador}`);// 2

contador = contador + 2;

console.log(`El contador está en ${contador}`);

contador += 2; //incremento con paso 2 = 6

console.log(`El contador está en ${contador}`);

contador += 20;
contador += 50;
contador += 100;
contador += 200;

console.log(`El contador está en ${contador}`);

console.log('=========================================');

//Decremento
contador = contador - 1;
contador --; //decremento con paso 1
console.log(`El contador está en ${contador}`);

contador *= 50;
console.log(`El contador está en ${contador}`);

contador -= 50; 
console.log(`El contador está en ${contador}`);


console.log('=========================================');

//Operadores Relacionales
// < > == === != 
let edad = 15;
let email = prompt('Introduce tu email: ')
let Admin = 'Juan';


// Operadores Lógicos
// && || !


//Condicionales
//if (true) {se ejecuta el código }
//if (false) { NO se ejecuta el código}

if (edad < 18) {//false
    console.log(`1. No puede comprar bebidas porque tiene ${edad} años de edad`);
}

if (edad > 18) {//false
    console.log(`2. No puede comprar bebidas porque tiene ${edad} años de edad`);
}

if (edad >= 18) {//true
    console.log(`3. Si puede comprar bebidas porque tiene ${edad} años de edad`);
}

console.log('=========================================');

if(email == 'juan@gmail.com'){//true
    console.log(`Bienvenido administrador ${Admin}`);
    alert(`Bienvenido Administrador ${Admin}`)
}else{//sino : si es falsa la condición, se ejecuta lo que está en ele else
    alert(`Email Incorrecto, no es el Administrador`)
}