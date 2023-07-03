const app = require('./app');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('NEW USER', socket.id);

    // socket.emit('Welcome', 'Welcome to the chat app');
    // socket.on('evento', (data, cb) => {
    //     console.log(data);
    //     cb('Todo salio bien PAPA');
    // });
    socket.broadcast.emit('nuevoUsuario', socket.id);
    socket.emit('cambiarH3', 'Hola mundo');

    socket.on('cambiarMensaje', (nuevoMensaje) => {
        io.emit('cambiarH3', nuevoMensaje);
    });

    // socket.on('cambiarMensaje', (nuevoMensaje) => {
    //     socket.broadcast.emit('cambiarH3', nuevoMensaje);
    // });

    socket.on('disconnect', () => {
        console.log('User disconnected with id', socket.id);
    });
});

module.exports = server;
