const http = require('http');
const fs = require('fs');
const url = require('url');

// Crear el servidor
const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  
  // Manejar la solicitud GET para el archivo HTML
  if (path === '/' || path === '/index.html') {
    fs.readFile(__dirname + '/index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error cargando el archivo HTML.');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

// Manejar la solicitud POST para la selección del usuario
server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/selection') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      const { selection } = JSON.parse(data);
      console.log('Selección del usuario:', selection); // Mostrar la selección en la consola del servidor
      res.end();
    });
  }
});
