const mysql = require('mysql2');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'rutadelsabor'
});

connection.connect(err => {
    if (err) {
        console.error('error de conexion:', err);
    } else {
        console.log('conectado a MySQL');
    }
});

module.exports = connection;