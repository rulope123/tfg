import { Router } from "express";
import { loginController } from "../controller/login.js";

export const createLoginRouter = ({loginModel}) => {
    const routerLogin = Router();
    const LoginController = new loginController({loginModel});
    routerLogin.get('/login',LoginController.getLogin);
    routerLogin.get('/registrar',LoginController.getRegistrar);
    routerLogin.get('/cambiarContrasena',LoginController.getCambiarContrasena);
    routerLogin.get('/view/pedir_cita.ejs', LoginController.getPedirCita);
    routerLogin.get('/view/inicio.ejs',LoginController.getInicio);
    routerLogin.get('/view/vacunaciones.ejs',LoginController.getVacunaciones);
    routerLogin.get('/view/vacunaciones-perros.ejs',LoginController.getVacunacionesPerros);
    routerLogin.get('/view/vacunaciones-gatos.ejs',LoginController.getVacunacionesGatos);
    routerLogin.get('/view/marcaje_electrico.ejs',LoginController.getMarcajeElectrico);
    routerLogin.get('/view/desparasitaciones.ejs',LoginController.getDesparasitaciones);
    routerLogin.get('/view/desparasitaciones-gatos-perros.ejs',LoginController.getDesparasitacionesGatosPerros);
    routerLogin.get('/view/cirugia.ejs', LoginController.getCirugia);
    routerLogin.get('/view/contacto.ejs',LoginController.getContacto);
    routerLogin.get('/view/politica_privacidad.ejs',LoginController.getPolitica);
    routerLogin.post('/controller/login',LoginController.postLogin);
    routerLogin.post('/controller/registrar',LoginController.postRegistrar);
    routerLogin.post('/controller/cita',LoginController.postCita);
    routerLogin.post('/controller/contactoUsuario',LoginController.postContactoUsuario);
    routerLogin.post('/controller/cambiarContrasena',LoginController.postCambiarContrasena);
    routerLogin.post('/controller/codigoContrasena',LoginController.postCodigoContrasena);
    routerLogin.post('/controller/nuevaContrasena',LoginController.postNuevaContrasena);
    routerLogin.post('/cita',LoginController.postGuardarCita);
    routerLogin.post('/controller/contacto',LoginController.postContacto);

    return routerLogin;
}


