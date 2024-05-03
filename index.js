const express = require('express');
const path = require('path');
require('dotenv').config();

//DBConfig
const { dbConnection } = require('./database/config').dbConnection();

// App de Express
const app = express();


//Lectura y pase de Body
app.use(express.json());

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );



//Rutas
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/mensjaes', require('./routes/mensajes') );


server.listen( process.env.PORT, (err)=> {
    if (err) throw new Error(err);

    console.log('Servidor Corriendo puerto', process.env.PORT);
});


