
//Esta ruta responde a /users

const express = require('express');
const router = express.Router();
const {
    listarUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    eliminarUsuarios
} = require('../controllers/usersControllers');


router.get('/', listarUsuarios);

router.post('/', crearUsuarios);

router.put('/:id', actualizarUsuarios);

router.delete('/:id', eliminarUsuarios);

//exportamos el enrutador
module.exports = router;