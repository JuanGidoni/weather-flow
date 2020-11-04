const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');

env.config();
const key = process.env.KEY;

router.get('/:city', async (req, res) => {
    try {
        let cityName = req.params.city    
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}&lang=es`
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