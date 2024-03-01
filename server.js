const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Manejar conexiones de clientes
io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    // Manejar mensajes enviados por el cliente
    socket.on('message', (message) => {
        console.log('Mensaje recibido:', message);
        io.emit('message', message); // Reenviar el mensaje a todos los clientes conectados
    });

    // Manejar desconexiones de clientes
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});