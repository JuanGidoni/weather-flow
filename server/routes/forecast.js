// Declaro constantes requeridas
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');

// Inicializo config para archivo .env y declaro constante key para almacenar dicho dato.
env.config();
const key = process.env.KEY;

// Creo un router de GET con dos parametros: latitud y longitud, luego paso mediante arrow function.
router.get('/:lat/:lon', (req, res) => {

    // declaro lat y lon mediante los parametros obtenidos
    let lat = req.params.lat;
    let lon = req.params.lon;
    
    // const url = `https://api.openweathermap.org/data/2.5/forecast/daily?appid=${key}&q=${cityName}&units=metric&lang=es`;
    
    // declaro constante URL con el enlace a la api de OpenWeatherMap con los parametros lat lon y key.
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric&lang=es`
    
    // Creo la peticion fetch y retorno la data con status 200, sino err.
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            res.status(200).send(data);
        })
        .catch(err => {
            console.log(err);
        });
})
module.exports = router;