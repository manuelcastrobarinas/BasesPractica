const { validationResult } = require("express-validator")
const Usuario = require("../models/usuario")



const CrearUsuario = async (req,res)=>{
    
    const { email } = req.body;
     
    try {
        const FindEmail = await Usuario.findOne({email});
        if(FindEmail){
            return res.status(400).json({
                ok:false,
                mensaje:'este correo ya esta registrado'
            });
        }

        const usuario = new Usuario(req.body);         
        await usuario.save();
       
        res.json({
            ok:true,
            msg:'crear usuario!!',
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            mensaje: 'hable con el administrador'
        });
    }
}


module.exports ={
    CrearUsuario
}