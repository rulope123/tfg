import { loginModel } from "../model/bbdd/querys.js"
export class loginController{

    constructor({loginModel}){
        this.loginModel = loginModel
    }

    getLogin = async (req,res) => {
        res.render('../view/login.ejs')
    }

    getRegistrar = async (req,res) => {
        res.render('../view/registrar.ejs')
    }

    getPedirCita = async (req,res) => {
        res.render('../view/pedirCita.ejs');
    }

    getInicio = async (req,res) => {
        res.render('../view/inicio.ejs');
    }

    getVacunaciones = async (req,res) => {
        res.render('../view/vacunaciones.ejs');
    }

    getVacunacionesPerros = async (req,res) => {
        res.render('../view/vacunaciones-perros.ejs');
    }

    getVacunacionesGatos = async (req,res) => {
        res.render('../view/vacunaciones-gatos.ejs');
    }
    
    getMarcajeElectrico = async (req,res) => {
        res.render('../view/marcaje_electrico.ejs');
    }

    getDesparasitaciones = async (req,res) => {
        res.render('../view/desparasitaciones.ejs');
    }
    
    getDesparasitacionesGatosPerros = async(req,res) => {
        res.render('../view/desparasitaciones-gatos-perros.ejs');
    }

    getCirugia = async(req,res) => {
        res.render('../view/cirugia.ejs');
    }

    getContacto = async(req,res) => {
        res.render('../view/contacto.ejs');
    }

    postLogin = async (req,res) => {
        const {usuario,contrasena} = req.body;
        const data = {
            usuario:usuario,
            contrasena:contrasena
        }
       const results = await loginModel.getUser({data});
       if (results) res.render('../view/inicio.ejs',{usuario:usuario});
    }

    postRegistrar = async (req,res) => {
        const {nuevoUsu,nuevaContra,nuevoCorreo} = req.body;
        const data = {
            nuevoUsu:nuevoUsu,
            nuevaContra:nuevaContra,
            nuevoCorreo:nuevoCorreo
        }
        const results = await loginModel.insertUser({data});
        if (results) res.status(200).render('../view/login.ejs');

    }

    getCambiarContrasena = async (req,res) => {
        res.render('../view/cambiarContrasena.ejs');
    }

    getPolitica = async (req,res) => {
        res.render('../view/politica_privacidad.ejs');
    }

    postCambiarContrasena = async (req,res) => {
        const {usu,nuevaContrasena} = req.body;
        const data = {
            usu:usu,
            nuevaContrasena:nuevaContrasena
        }
        const results = await loginModel.cambiarContrasena({data});
        if(results) {
            res.render('../view/login.ejs');
        }else{
            const usuario = data.usu;
            res.render('../view/codigo.ejs',{usuario:usuario});
        }
    }

    postCodigoContrasena = async (req,res) => {
        const {usu,codigo} = req.body;
        const data = {
            usu:usu,
            codigo:codigo
        }
        const results = await loginModel.codigoContrasena({data});
        if(results){
            const usuario = data.usu
            console.log(usuario);
            res.status(200).render('../view/nuevaContra.ejs',{usuario:usuario})
        }else{
            res.status(400).json({message:'No se ha podido crear el código del cambio de la contraseña'});
        }
    }

    postNuevaContrasena = async (req,res) => {
        const {nuevaContra,usu} = req.body;
        const data = {
            usu:usu,
            nuevaContra:nuevaContra
        }
        console.log('hola',usu);
        console.log(nuevaContra);
        const results = await loginModel.nuevaContra({data});
        if(results){
            res.render('../view/login.ejs');
        }else{
            res.status(400).json({message:'No se ha podido actualizar la contraseña'});
        }
    }

    postGuardarCita = async (req,res) => {
        const {usuario,tipoCita,lugarCita,animal,enfermedad,fecha} = req.body;
        console.log(usuario);
        const idUsuario = await loginModel.getUserInsertCita(usuario);
        console.log("id del usuario",idUsuario[0]);
        const data = {
            usu:idUsuario[0].id_usuario,
            cita:tipoCita,
            lugarCita:lugarCita,
            animal:animal,
            enfermedad:enfermedad,
            fecha:fecha
        }

        console.log(data);

        const results = await loginModel.insertarAnimal({data});
        if (results){
            res.status(200).json({message:'Se ha guardado los datos de la cita'});
        }else{
            res.status(200).json({message:'No se ha guardado los datos de la cita'});
        }
    }

    postCita = async (req,res) => {
        const {usuario} = req.body;
        console.log('usuario' + usuario);
        if(usuario){
            res.render('../view/pedirCita.ejs',{usuario:usuario})
        }
    }

    postContactoUsuario = async (req,res) => {
        const {usuario} = req.body;
        console.log('usuario ' + usuario);
        if(usuario){
            res.render('../view/contacto.ejs',{usuario:usuario})
        }
    }
    

    postContacto = async(req,res) => {
        const {usu,especie, descripcion, mensaje} = req.body;
        const idUsuario = await loginModel.getUserInsertCita(usu);
        console.log("id del usuario ",idUsuario[0]);
        const data = {
            usuario:idUsuario[0].id_usuario,
            especie:especie,
            descripcion:descripcion,
            mensaje:mensaje
        }
        const results = await loginModel.insertarContacto({data});

        if (results){
            res.status(200).json({message:'Se ha guardado los datos del contacto'});
        }else{
            res.status(200).json({message:'No se ha guardado los datos del contacto'});
        }
    }

}