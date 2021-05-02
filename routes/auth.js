// path: api/login

const {Router} = require('express');
const { check } = require('express-validator');
const { CrearUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();

router.post('/register',[
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    check('email','el correo es obligatorio').isEmail(),
    validarCampos
],CrearUsuario);


module.exports =router;
