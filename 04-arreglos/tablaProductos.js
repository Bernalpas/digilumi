

//le pido al objeto global de JS que al cargar la página ejecute la función
window.onload = function() {
    llenarTabla();
}



function llenarTabla() {

    console.log('Me llamaron al cargar la página');

    //creamos una tabla y cargamos los datos con el form
    let tabla = document.getElementById('miTabla');
    
    //limpiar la tabla cuando se cargan los productos
    tabla.innerHTML = '';

    //creamos una variable para guardar los datos convertidos
    //let misProductos = JSON.parse('Productos')

    let otrosProductos = JSON.parse(localStorage.getItem('Productos'))

    //utilizamos la memoria local del navegador para guardar info de los productos
    //localStorage.getItem('Productos', misProductos);

    for (let i = 0; i < otrosProductos.length; i++) {
        
        //creamos el tr
        let fila = document.createElement('tr');

        //creamos el td de nombre
        let celdaNombre = document.createElement('td');

        //creamos el td de precio
        let celdaPrecio = document.createElement('td');

        //celdaNombre = productos[i].nombre;
        celdaNombre.textContent = otrosProductos[i].nombre;
        celdaPrecio.textContent = otrosProductos[i].precio;

        //subimos los td al tr
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        //subimos el tr al tbody
        tabla.appendChild(fila);
    }

    //Mostramos al cliente la cantiddad de productos en stock
    let totalProductos = document.getElementById('totalProductos');
    totalProductos.innerHTML = `<td>${otrosProductos.length}</td>`;

}
