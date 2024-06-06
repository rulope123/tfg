import { createLoginRouter } from './router/router.js';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { loginModel } from './model/bbdd/querys.js';
import { corsMiddleware } from './middleware/cors.js';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))
app.use(createLoginRouter({loginModel:loginModel}));
app.use(corsMiddleware());
app.use('/static',express.static('static'));

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
