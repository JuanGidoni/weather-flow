const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');

env.config();
const key = process.env.KEY;

router.get('/:lat/:lon', async (req, res) => {
    try {
        let lat = req.params.lat
        let lon = req.params.lon
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric&lang=es`
        await fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
                res.status(200).send(data)
        })
        .catch(error => {
            console.log(error)
            res.status(404).send(error)
        })
    } catch (error){
        console.log(error)
        res.status(404).send(error)
    }
})
module.exports = router;