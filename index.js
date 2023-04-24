//const express = require('express'); //Common js
import express from 'express' // ecma scrptis modules
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import usuarioRoutes from './routes/usuarioRoutes.js';
import propiedadesRoutes from './routes/propiedadesRoutes.js';
import appRoutes from './routes/appRoutes.js';
import apiRoutes from './routes/apiRoutes.js';
import db from './config/db.js'

// Crear la app
const app = express();

// Habilitar lectura de datos de forms
app.use( express.urlencoded({extended: true}) )

// Habilitar Cookie Parser
app.use( cookieParser() )

// Habilitar el CSRF
app.use( csrf({cookie: true}))

// Conexión a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('Conexión correcta a la base de datos')
} catch (error) {
    console.log(error)
}

// Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta Pública
app.use( express.static('public') )

// Routing 
app.use('/', appRoutes);
app.use('/auth', usuarioRoutes);
app.use('/', propiedadesRoutes);
app.use('/api', apiRoutes);

// Dejar que heroku asigne el puerto
const host = '0.0.0.0';
const port = process.env.PORT;

// Definir un puerto y arrancar el proyecto 
app.listen(port, host, () => {
    console.log(`El servidor esta funcionando`)
});