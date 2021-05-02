const express = require('express');
require('dotenv').config();

const {dbConnection } = require('./database/config');
dbConnection();


// App de Express
const app = express();

//lectura y parseo del body
app.use(express.json());


// Node Server
const server = require('http').createServer(app);



//RUTAS 
app.use('/api/', require('./routes/auth'));

server.listen( process.env.PORT, ( err ) => {
    if ( err ) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT );

});


