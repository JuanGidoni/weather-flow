import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Weather from './components/weather'
import Error from './components/Error'
import Loader from 'react-loader-spinner'
import { BASE_API_URL } from './utils/constants';

function App() {

const [weather, setWeather] = useState({})
const [forecast, setForecast] = useState({})
const [current, setCurrent] = useState({})
const [code, setCode] = useState({})
const [access, setAccess] = useState(false)
const [loading, setLoading] = useState(true)
const [query, setQuery] = useState('')

useEffect( () => { 
      getLocation()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

const getLocation = async() => {
  try {
  setLoading(true)
  await fetch('https://geolocation-db.com/json/')
  .then( res => res.json())
  .then( result => {
    setCurrent(result)
    getWeather(result.city)
  })
  .catch(err => {
    setCode({
      code: 404,
      message: 'Error, algo salio mal con la ubicación :(',
      console: err
    })
    setLoading(false)
  })
  } catch (error) {
    setCode({
      code: 404,
      message: error
    })
    console.log(error)
  }
}

const getWeather = async(result) => {
  try {
  await fetch(`${BASE_API_URL}/v1/current/${result}`)
  .then(res => res.json())
  .then(result => {
    if(result.name){
      getForecast(result)
    }
    if(result.cod === '404'){
      setCode({
        code: result.cod,
        message: result.message
      })
    setAccess(false)
    setLoading(false)
    }
    setWeather(result)
  })
  .catch(err => {
    setCode({
      code: 404,
      message: 'Error, algo salio mal con el clima :(',
      console: err
    })
    setLoading(false)
  })
  } catch (error) {
    setCode({
      code: 404,
      message: error
    })
    console.log(error)
  }
}

const getForecast = async(result) => {
  try {
    await fetch(`${BASE_API_URL}/v1/forecast/${result.coord.lat}/${result.coord.lon}`)
        .then(res => res.json()).then(result => {
          setAccess(true)
          setLoading(false)
          setForecast(result)
          setCode('current and forecast data loaded...')
          if(result.cod === '404'){
            setCode({
              code: result.cod,
              message: result.message
            })
          setAccess(false)
          }
        }).catch(err => {
          setCode({
            code: 404,
            message: 'Error, algo salio mal con el pronóstico :(',
            console: err
          })
          setLoading(false)
        })
  } catch (error) {
    setCode({
      code: 404,
      message: error
    })
    console.log(error)
  }
  
}

const dateBuilder = (d) => {

    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    return `${day} ${date}, ${month} ${year}`
}


  return (  
    <Router>
        <Switch>
          { loading ? 
             <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} 
            className="text-danger text-center d-flex flex-column justify-content-center align-items-center mb-3 p-5"
            />
            : access ? 
            <Route
                path='/'
                render={(props) => (
                  <Weather {...props}
                   weather={weather}
                   forecast={forecast}
                   loading={loading}
                   setLoading={setLoading}
                   day={dateBuilder(new Date())}
                   code={code}
                   getWeather={getWeather}
                   setWeather={setWeather}
                   getLocation={getLocation}
                   current={current}
                   query={query}
                   setQuery={setQuery} /> 
                )}
              />
            :
          <Route
            path='/'
            render={(props) => (
              <Error {...props} 
              day={dateBuilder(new Date())}
              getLocation={getLocation} 
              code={code} 
              getWeather={getWeather} 
              setQuery={setQuery} 
              query={query}
              setLoading={setLoading} />
            )}
          />
          }
        </Switch>  
          <div className="footer text-center mt-2 text-white">
            <p>Developed by <a className="link"href="https://github.com/JuanGidoni">Juan Ignacio Gidoni</a> with React and Node/Express. Using: <a className="link" href="https://openweathermap.org/api">OpenWeatherMap</a></p>
          </div>
    </Router>
  );
}

export default App;
