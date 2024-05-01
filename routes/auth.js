/*

path: /api/login

*/


const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, renewToken } = require('../controller/auth');
const { validarCampos } = require('../middlewares/validate_flieds');
const { validarJWT } = require('../middlewares/validate_jwt');

const router = Router();



router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio y debe ser valido').not().isEmpty().isEmail(),
    validarCampos
] ,crearUsuario);


router.post('/', [
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo es obligatorio y debe ser valido').not().isEmpty().isEmail(),
] ,login);

router.get('/renew',validarJWT ,renewToken,);



module.exports = router;