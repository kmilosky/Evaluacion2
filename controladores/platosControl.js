const db = require('../database/db');

const obtenerPlatos = (req, res) => {
    db.query('SELECT * FROM platos', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener todos los platos', detalle: err.message });
        }
        res.json(results);
    });
};

module.exports = {
    obtenerPlatos
};