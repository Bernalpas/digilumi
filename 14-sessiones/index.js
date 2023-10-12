const express = require('express');
const app = require('express')();
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const clave = process.env.SESSION_SECRET;

//1. Importamos la librería de session
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//2. Utilizamos el meddelware de la session
app.use(session({
    store: new FileStore({path: './sessions', ttl: 60}),
    secret: clave,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60
    }
}));

const dameNombre = req => req.session.nombre || 'Pepe';

app.get('/', (req, res) => {
    
    let { nombre } = req.body;
    req.session.nombre = nombre
    return res.json({
        mensaje: 'Bienvenido',
        nombre: dameNombre(req),
        session: req.session
    });

});


app.get('/borrar', (req, res)=>{
    req.session.destroy(err =>{
        if(err) return res.json({mensaje: 'Error'})
        else return res.json({mensaje: 'Adiós'})
    })
});





app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
