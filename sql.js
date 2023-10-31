// Importa el módulo mysql2
const mysql = require('mysql2');

// Configura los parámetros de conexión
const connection = mysql.createConnection({
    host: 'http://localhost:${port}`', // Cambia 'localhost' por la dirección de tu host si es diferentecurl http://localhost
    user: 'tu_usuario', // Reemplaza 'tu_usuario' con tu nombre de usuario de MySQL
    password: 'fielder96', // Reemplaza 'tu_contraseña' con tu contraseña de MySQL
    database: 'mcu_guide', // Reemplaza 'nombre_de_tu_base_de_datos' con el nombre de tu base de datos
});

// Establece la conexión
connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión exitosa a la base de datos MySQL!');

    // Aquí puedes ejecutar consultas SQL y manejar los resultados
});