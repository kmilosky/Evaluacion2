const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const restaurantesRoutes = require('./routes/restaurantesRoutes');
const platosRoutes = require('./routes/platosRoutes');

app.use('/api/restaurantes', restaurantesRoutes);
app.use('/api/platos', platosRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});