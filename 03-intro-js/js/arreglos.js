
//arreglos - arrays - vectores
let banana = 'banana';
let manzana = 'Manzana';
let peras = "peraas"

let falso = false;//booleanas
let verdadero = true;
let indefinido;
let noExiste = null;

//indefinido = 'ahora exito'


console.log(falso);
console.log(verdadero);
console.log(indefinido);
console.log(noExiste);



//creamos un array de frutas
//indice         0        1         2              3  
let frutas = ["Bananas", "Manzanas", "Peras", "Ciruelas"];

console.log(frutas);

//método de los arreglos que me dice la cantidad de datos que posee
console.log(`La cantidad de datos en el arreglo frutas es de ${frutas.length}`);


//indice         0        1         2              3            4       5  
let persona = ['Pepe', 'Pérez', 123456789, 'San Martín 1200', true, 'Misiones'];//n-1 = índice de los arreglos


console.log(persona);

console.log(`La cantidad de datos en el arreglo persona es de ${persona.length}`);



console.table(persona);
console.table(frutas);


console.log('=========================================');

let estudiantes = [];

console.log(`La cantidad de datos en el arreglo persona es de ${estudiantes.length}`);

console.log('=========================================');

//JSON
let objetoJson = {
    nombre: 'Pepe',
    apellido: 'Pérez',
    dni: 123456789,
    direccion: 'San Martín 1200',
    pais: 'Argentina'
}

console.log(objetoJson);

//POO - Clases y objetos en JS
class Auto{
    constructor(marca, modelo, color, patente){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.patente = patente;
    }

    mostrarDatos(){
        console.log(`El auto es un ${this.marca} ${this.modelo} de color ${this.color} y patente ${this.patente}`);
    }
}

let auto1 = new Auto('Ford', 'Fiesta', 'Rojo', 'ABC123');
auto1.mostrarDatos()




