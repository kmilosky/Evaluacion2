const db = require('../database/db');

const obtenerRestaurantes = (req, res) => {
    db.query('SELECT * FROM restaurantes', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los restaurantes' });
        }
        res.json(results);
    });
};

const obtenerRestaurantePorId = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM restaurantes WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al buscar el restaurante' });
        }
        if (results.length === 0) {
            return res.status(404).json({ mensaje: 'Restaurante no encontrado' });
        }
        res.json(results[0]);
    });
};

const obtenerPlatosPorRestaurante = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM platos WHERE restaurantes_id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los platos' });
        }
        res.json(results);
    });
};

module.exports = {
    obtenerRestaurantes,
    obtenerRestaurantePorId,
    obtenerPlatosPorRestaurante
};