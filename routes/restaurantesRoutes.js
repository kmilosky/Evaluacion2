const express = require('express');
const router = express.Router();
const restaurantesControl = require('../controladores/restaurantesControl');

router.get('/', restaurantesControl.obtenerRestaurantes);

router.get('/:id', restaurantesControl.obtenerRestaurantePorId);

router.get('/:id/platos', restaurantesControl.obtenerPlatosPorRestaurante);

module.exports = router;