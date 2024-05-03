/*

path: /api/usuarios

*/


const { Router } = require('express');
const { getUsuarios } = require('../controller/usuarios');
const { validarJWT } = require('../middlewares/validate_jwt');

const router = Router();

router.get('/',validarJWT , getUsuarios);



module.exports = router;