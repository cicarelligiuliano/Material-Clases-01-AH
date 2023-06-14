const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 201;
//     res.setHeader('Content-type', 'text-plain');

//     const date = new Date();
//     const horaActual = date.getHours();
//     console.log(horaActual);

//     if (horaActual > 5 && horaActual <= 12) {
//         return res.end('Buenos dias');
//     } else if (horaActual >= 13 && horaActual <= 19) {
//         return res.end('Buenas tardes');
//     } else {
//         return res.end('Buenas noches');
//     }
// });

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.write('Hello, World!');
//         res.end();
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.write('This is the about page.');
//         res.end();
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.write('404 Not Found');
//         res.end();
//     }
// });

module.exports = { server };
