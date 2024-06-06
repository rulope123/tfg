import mysql from 'mysql2/promise'
import { dir } from 'node:console'
import { createRequire } from 'node:module'
import crypto from 'node:crypto'
import nodemailer from 'nodemailer'
const require = createRequire(import.meta.url) //en esta linea estoy creando mi propio require para importar archivos
const conf_bbdd = require('./db_conf.json')

const config = {
    host:conf_bbdd.mysql.host,
    user:conf_bbdd.mysql.user,
    password:conf_bbdd.mysql.password,
    database:conf_bbdd.mysql.database,
    port:conf_bbdd.mysql.port
}

const connection = mysql.createPool(config);

export class loginModel{

    static async getUser({data}){
        try {
            const results = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?',[data.usuario,data.contrasena]);
            if (results.length === 0) return false;
            return true;
        } catch (error) {
            console.log('No se han podido obtener los datos del usuario',error);
        }
    }

    static async getUserInsertCita(usuario){
        try {
            console.log(usuario);
            const results = await connection.query('SELECT id_usuario FROM usuarios WHERE usuario = ? ',[usuario]);
            console.log(results[0]);
            if (results.length === 0) return false;
            return results[0];
        } catch (error) {
            console.log('No se han podido obtener los datos del usuario',error);
        }
    }

    static async insertUser({data}){
        try {
            const results = await connection.execute('INSERT INTO usuarios (usuario,contrasena,email) VALUES (?,?,?)',[data.nuevoUsu,data.nuevaContra,data.nuevoCorreo]);
            console.log('Usuario insertado correctamente',results);
            if ( results.length === 0 ) return false;
            return true;
        } catch (error) {
            console.log('No se ha podido crear el usuario',error);
        }
    }

    static async cambiarContrasena({data}){
        try {
            const [results] = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?',[data.usu,data.nuevaContrasena]);
            if( results.length === 0){
                try {
                    const [datosUsuario] = await connection.query('SELECT * FROM usuarios WHERE usuario = ?',[data.usu]);
                    const generateCode = () => {
                        return crypto.randomBytes(3).toString('hex').toUpperCase();
                      };
                      console.log(datosUsuario[0].email);
                      console.log(datosUsuario[0].contrasena);
                    if (datosUsuario.length !== 0){
                        const transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                              user: datosUsuario[0].email,
                              pass:'thef rdnw dyak ijiv'
                            }
                          });
                          const code = generateCode();
                          try {
                            const codigo = await connection.query('UPDATE usuarios SET codigo = ? WHERE usuario = ?',[code,datosUsuario[0].usuario]);
                            console.log(codigo);
                            if(codigo.affectedRows === 0){
                                  console.log('No se ha podido crear el codigo');
                              }else{
                                await transporter.sendMail({
                                    from: 'veterninariapena@gmail.com',
                                    to: datosUsuario[0].email,
                                    subject: 'Código de reinicio de contraseña',
                                    text: `Tu código de reinicio de contraseña es: ${code}`
                                  });
                              }
                          } catch (error) {
                            console.log('No se ha podido crear el codigo',error);
                          }
                    } 
                } catch (error) {
                    console.log('No se ha encontrado el usuario para crear el codigo',error);
                }
                return false;
            }
            return true;
        } catch (error) {
            console.log('No se ha podido cambiar la contraseña',error);
        }
    }

    static async codigoContrasena({data}){
        try {
            const results = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND codigo = ?',[data.usu,data.codigo]);
            if(results.length === 0){
                return false;
            }
            return true;
        } catch (error) {
            console.log('No se ha encontrado el usuario o el codigo',error);
        }
    }

    static async nuevaContra({data}){
        try {
            const results = await connection.query('UPDATE usuarios SET contrasena = ? WHERE usuario = ?',[data.nuevaContra,data.usu]);
            console.log(results);
            const eliminarCodigo = await connection.query("UPDATE usuarios SET codigo = null WHERE usuario = ?",[data.usu]);
            if(results.affectedRows == 0){
                return false;
            }
            return true;
        } catch (error) {
            console.log('No se ha podido actualizar la contraseña del usuario',error);
        }
    }

    static async insertarAnimal({data}){
        try{
            console.log(data);
            const results = await connection.query('INSERT INTO cita (id_usuario,tipocita_fk,lugarcita_fk,raza,enfermedad,fecha) values (?,?,?,?,?,?)',[data.usu,data.cita,data.lugarCita,data.animal,data.enfermedad,data.fecha]);
            console.log(results);
            return results.affectedRows == 0 ?  false: true;
        }catch(error){
            console.log("No se ha podido insertar los datos de los animales ",error);
        }
    }

    static async insertarContacto({data}){
        try {
            const results = await connection.query('INSERT INTO contacto (id_usuario_fk,especie,descripcion,mensaje) VALUES (?,?,?,?)',[data.usuario,data.especie,data.descripcion,data.mensaje]);
            console.log(results);
            return results.affectedRows == 0 ?  false: true;
        } catch (error) {
            console.log("No se ha podido insertar los datos del contacto ",error);
        }
    }
}