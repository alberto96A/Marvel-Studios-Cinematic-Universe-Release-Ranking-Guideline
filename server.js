const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, este es tu servidor básico!');
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});