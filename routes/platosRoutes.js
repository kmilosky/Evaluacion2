const express = require('express');
const router = express.Router();
const platosControl = require('../controladores/platosControl');

router.get('/', platosControl.obtenerPlatos);

module.exports = router;