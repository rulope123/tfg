import mysql from 'mysql2/promise'; // Importa mysql2 con soporte para promesas
import fs from 'node:fs/promises';

// Función para leer la configuración desde el archivo JSON
async function readConfig() {
    try {
        const data = await fs.readFile('./db_conf.json');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        throw error;
    }
}

// Función para establecer la conexión MySQL
export async function connectToDatabase() {
    try {
        const config = await readConfig();

        const connection = await mysql.createConnection({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database
        });

        console.log("Conexión establecida con la base de datos");

        return connection;
    } catch (error) {
        console.error('Error al establecer la conexión a la base de datos:', error);
        throw error;
    }
}
