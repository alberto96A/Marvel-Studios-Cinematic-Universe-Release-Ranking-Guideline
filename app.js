const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000; // Puedes cambiar el puerto según sea necesario

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base_de_datos',
});

app.get('/api/movies', async (req, res) => {
  try {
    const [rows, fields] = await connection.execute('SELECT * FROM movies');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener datos de la base de datos', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});