import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyWeather from './containers/MyWeather'

export default function Weather({
  weather,
  day,
  loading,
  forecast,
  code,
  getLocation,
  setLoading,
  getWeather,
  query,
  setQuery
}) {


const dateBuilder = (d) => {
       let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    
        let day = days[d.getDay()]
    
        return `${day}`
}

const styleWeather = (c) => {
  var x = document.getElementsByTagName("BODY")[0];
  if(c >= '200' && c <= '232'){
    x.className = 'body-tormenta'
      return 'tormenta'
  } 
  else if(c >= '300' && c <= '321'){
    x.className = 'body-llovizna'
      return 'llovizna'
  } 
  else if(c >= '500' && c <= '531'){
    x.className = 'body-lluvia'
      return 'lluvia'
  } 
  else if(c >= '600' && c <= '622'){
    x.className = 'body-nieve'
      return 'nieve'
  } 
  else if(c >= '701' && c <= '781'){
    x.className = 'body-atmosfere'
      return 'atmosfere'
  } 
  else if(c === 800){
    x.className = 'body-soleado'
      return 'soleado'
  } 
  if(c >= '801' && c <= '804'){
    x.className = 'body-nublado'
      return 'nublado'
  }else {
    x.className = 'body-soleado'
      return 'soleado'
  }
} 

return (
        <div className="container-fluid">
            {(typeof weather.main != "undefined") ? (
            <MyWeather 
            day={day}
            weather={weather}
            forecast={forecast}
            getWeather={getWeather}
            query={query}
            setQuery={setQuery}
            dateBuilder={dateBuilder}
            styleWeather={styleWeather}
            setLoading={setLoading}
            getLocation={getLocation}
            />
        ) : (
        <div className="text-danger text-center d-flex flex-column justify-content-center align-items-center">
        <p>{code}</p>
        <button onClick={getLocation} className="btn btn-primary search-btn mr-1 mb-3">Volver a mi ubicación</button>
    </div>
    )}
        </div>

 )}
