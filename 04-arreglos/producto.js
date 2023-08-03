

console.log('=========================================');
console.log('====== Contactos en JS ======');
console.log('=========================================');

let productos = [];

function agregarProducto() {

    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;

    //console.log(user);
    //console.log(password);

    let producto = {
        nombre: nombreProducto,
        precio: precioProducto
    }

    productos.push(producto);

    validarDatos(nombreProducto, precioProducto);

}


function validarDatos(nombreProducto, precioProducto) {

    //1. Validar los datos de los contactos



    //2. Validar si uno de los dos datos esta vacío


    //3. Si los dos datos que recibimos están vacíos, entonces no se agrega el contacto


        console.log(`Soy la función validarDatos y los datos que recibí son: ${nombreProducto}, ${precioProducto}`);


}


function imprimirProducto() {

    console.log(productos);
    
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i]);
    }

    //imprimimos el array de objeto
    for (let i = 0; i < productos.length; i++) {
        console.log(`Los datos del producto son: ${i} - ${productos[i].nombre} - ${productos[i].precio}`);
        
    }

}
