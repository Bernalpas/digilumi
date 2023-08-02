console.log('=========================================');
console.log('====== Método de Array en JS ======');
console.log('=========================================');

alert('Bienvenido a la app del Arrays');

let productos = []

console.log(`Los productos del arreglo son: ${productos}`);
console.log(`La cantidad de productos del arreglo es: ${productos.length} productos`);

//el confirm me retorna un valor booleano
let confirmar = confirm('¿Desea guardar un Producto?');

console.log(`La respuesta del cliente es ${confirmar}`);

let cantidadProducto = parseInt(prompt('¿Cuántos productos desea cargar?'));

console.log(`La cantidad de Productos a cargar son ${cantidadProducto}`);

let inicio = 1;

while (inicio <= cantidadProducto) {
    
    console.log('=========================================');
    
    let agregoProducto = prompt('Introduzca un Producto: ');
    
    //método para guardar datos en el array
    productos.push(agregoProducto);

    console.log(`Los productos del arreglo son: ${productos}`);
    console.log(`La cantidad de productos del arreglo es: ${productos.length} productos`);
    
    console.log('=========================================');

    //limitar el ejecucición del bucle
    //confirmar = false;
    inicio++;
}

//función para confirmar elecciones del cliente
//confirm('Desea guardar Productos?')

//imprimir el listado de los productos
for (let i = 0; i < productos.length; i++) {
    console.table(`${i} - Producto: ${productos[i]}`);
}




