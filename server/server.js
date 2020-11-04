// Declaro constantes requeridas
const env = require('dotenv');
const express = require('express');
const cors = require('cors');

// Declaro constantes de las routes
const current = require('./routes/current.js');
const forecast = require('./routes/forecast.js');
const location = require('./routes/location.js');

// Inicializo el env y su config.
env.config();

// Declaro la constante para utilizar express (llamada: app)
const app = express();

// Declaro el puerto mediante el process env (PORT, dentro del archivo .env)
const port = process.env.PORT || 5000;

// Habilito el uso de cors();
app.use(cors());

// Habilito el uso de express json
app.use(express.json());

// Creo una ruta default llamda v1 que retorna un json con la fecha del dia.
app.get("/v1/", (req,res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString() });
    console.log('Received GET => currentTime');
});

// Declaro el uso de las rutas (routes) previamente declaradas en sus constantes
app.use("/v1/current/", current);
app.use("/v1/forecast/", forecast);
app.use("/v1/location/", location);

// Inicializo la app mediante port y lo consoleo
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})