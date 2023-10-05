
//responde a la ruta /

import { Router } from 'express';
const router = Router();

//Midelware que controla los datos que ingresan a la database
import { check } from 'express-validator';
import { 
    userIndex, 
    userRegister, 
    userFomLogin, 
    userCreate, 
    userLogin, 
    userTable } from '../controllers/userController.js';

router.get('/', userIndex);

router.get('/registro', userRegister);

router.get('/login', userFomLogin);

router.get('/usuarios', userTable);

router.post('/create',
    [
        check('nombre').isLength({min:4}),
        check('email').isEmail(),
        check('password').isLength({min:8})
    ]
    , userCreate);

router.post('/login',
    [
        check('email').isEmail(),
        check('password').isLength({min:8})
    ]
    , userLogin);

export default router;

