// Declaro constantes requeridas
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');

// Inicializo config para archivo .env y declaro constante key para almacenar dicho dato.
env.config();
const key = process.env.KEY;

// Creo un router de GET con el parametro de "city", luego paso mediante arrow function.
router.get('/:city', (req, res) => {
    
    // declaro cityName mediante el parametro obtenido
    let cityName = req.params.city;
    
    // declaro constante URL con el enlace a la api de OpenWeatherMap con cityName y key.
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}&lang=es`;

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