
//responde a la ruta /

const express = require('express');
const router = express.Router();

//Midelware que controla los datos que ingresan a la database
const { check } = require('express-validator');
const {
    userIndex,
    userRegister,
    userCreate,
    userLogin
} = require('../controllers/userController');

router.get('/', userIndex);

router.get('/registro', userRegister);

router.post('/create',
    [
        check('nombre').isLength({min:4}),
        check('email').isEmail(),
        check('password').isLength({min:8})
    ]
    , userCreate);

router.post('/login', );

module.exports = router;

