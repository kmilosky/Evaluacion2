## Estructura Backend
El backend se desarrolló con Node.js y Express, implementando una arquitectura modular
basada en la separación de responsabilidades. 
La estructura del proyecto se organiza en tres directorios principales:

database/: Centraliza la configuración y conexión al motor de base de datos MySQL.
controllers/: Contiene la lógica de negocio y las consultas SQL ejecutadas contra la base de datos para cada entidad.
routes/: Define los endpoints de la API REST y los enlaza con sus controladores
correspondientes.

En la raíz, el archivo index.js actúa como el punto de entrada que inicializa el servidor
Express, parsea el formato JSON y expone las rutas principales de la API.

## Rutas
Se implementó una API REST con los siguientes endpoints para satisfacer los requerimientos
del sistema:

GET /api/restaurantes: Retorna la lista completa de todos los restaurantes registrados.
GET /api/restaurantes/:id: Retorna la información detallada de un restaurante
específico filtrado mediante su parámetro ID.
GET /api/restaurantes/:id/platos: Retorna el listado de platos asociados a un
restaurante en particular, cruzando la información mediante llaves foráneas.
GET /api/platos: Retorna la lista de todos los platos almacenados en el sistema.

## Controladores 
Para gestionar las peticiones a las rutas, se modularizó la lógica en dos controladores
separados:

restaurantesControl.js: Implementa las funciones asíncronas obtenerRestaurantes, obtenerRestaurantePorId y obtenerPlatosPorRestaurante.
platosControl.js: Implementa la función obtenerPlatos.

## Configuracion de conexion a MYSQL
La conexión a la base de datos se configuró en el archivo database/db.js
utilizando el paquete mysql2.
Se implementó el método createConnection, estableciendo los parámetros de conexión hacia el host localhost, con el usuario raíz(root) y apuntando a la base de datos rutadelsabor.

Se incluyó un bloque de validación mediante el método connect() para
capturar posibles errores de conexión y notificar por consola el éxito o fallo de la conexión al momento de inicializar el servidor.
