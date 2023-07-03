const socket = io();

socket.on('connect', () => {
    console.log('Connected to IO server with id', socket.id);
});

const datos = { dato: 'hola mama' };

// socket.emit('evento', datos, (resp) => {
//     console.log('El mensaje llego correctamente', resp);
// });

const cambiarMensaje = (mensaje) => {
    const messageH3 = document.querySelector('#mensaje');
    messageH3.innerHTML = mensaje;
};

const button = document.querySelector('#boton');

button.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('#inputMessage');

    if (input.value.trim().length > 0) {
        socket.emit('cambiarMensaje', input.value.trim());
    }
});

socket.on('nuevoUsuario', (message) => {
    console.log('Nuevo usuario conectado:', message);
});

socket.on('cambiarH3', (message) => {
    cambiarMensaje(message);
});

socket.on('disconnect', () => {
    console.log('Disconnected from IO server with id', socket.id);
});
