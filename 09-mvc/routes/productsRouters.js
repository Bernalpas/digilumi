
//Esta ruta responde a /products

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    res.send(`<h1 style="color: blue">Listamos todos los Productos</h1>`);

});

router.post('/', (req, res) => {

    let nombreProducto = req.body.nombreProducto;
    let precioProducto = req.body.precioProducto;
    let stockProducto = req.body.stockProducto;

    console.log(`Los datos recibidos son: Nombre: ${nombreProducto}, Precio: ${precioProducto} y Stock: ${stockProducto}`);

    res.status(200).json({
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        stockProducto: stockProducto
    })
    
});

router.put('/:id', (req, res) => {

    let products = req.params.id

    //console.log(req);
    console.log('=========================');
    console.log(req.params.id);
    console.log('=========================');
    res.send(`<h1 style="color: green">Actualizamos a un Producto con el ID: ${products}</h1>`);
});

router.delete('/:id', (req, res) => {

    let products = req.params.id;
    
    res.send(`<h1 style="color: red">Producto Eliminado con el ID: ${products}</h1>`);
});

module.exports = router;