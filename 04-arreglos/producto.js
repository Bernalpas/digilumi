

console.log('=========================================');
console.log('====== Productos en JS ======');
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


const buscarProducto = () => {

    //1. uno de los métodos para obtener elementos del html
    let buscar = document.getElementById('buscar').value;
    console.log(buscar);

    if (buscar == '') {
        alert('Ingresa un producto a buscar')
    }

    let titulo = document.getElementById('titulo');
    console.log(titulo);

    //Características de los elementos del DOM
    //obtengo el contenido del elemento seleccionado
    console.log(titulo.innerText);
    
    console.log('============================');
    
    //cambiamos el contenido del elemento seleccionado
    titulo.innerText = 'Ya realizamos la búsqueda necesaria'

    console.log(titulo.innerText);
    
    //podemos agregar elementos html al elemento seleccionado
    console.log(titulo.innerHTML);

    console.log('============================');

    titulo.innerHTML = `
    <img src="https://cnnespanol.cnn.com/wp-content/uploads/2023/08/230807092957-02-messi-inter-miami-fc-dallas-full-169.jpeg?quality=100&strip=info&w=414&h=311&crop=1" alt="agregamos img">
    <h2 style="color: blue">${productos[0]}</h2>
    <p>Este producto está genial</p>
    <h3>500</h3>
    `
}
