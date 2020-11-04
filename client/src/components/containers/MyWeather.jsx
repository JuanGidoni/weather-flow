import React from 'react'
import SearchBar from '../containers/SearchBar'

export default function MyWeather({
    day,
    weather,
    getWeather,
    query,
    loading,
    setQuery,
    styleWeather,
    forecast,
    setLoading,
    dateBuilder,
    getLocation
}) {

    const styleForecast = (c) => {
        if(c >= '200' && c <= '232'){
              return 'tormenta'
          } 
          else if(c >= '300' && c <= '321'){
              return 'llovizna'
          } 
          else if(c >= '500' && c <= '531'){
              return 'lluvia'
          } 
          else if(c >= '600' && c <= '622'){
              return 'nieve'
          } 
          else if(c >= '701' && c <= '781'){
              return 'atmosfere'
          } 
          else if(c === 800){
              return 'soleado'
          } 
          if(c >= '801' && c <= '804'){
              return 'nublado'
          }else {
              return 'soleado'
          }
    }
    return (
        <div>
            <div className="row d-flex justify-content-center align-items-center mx-auto">
              <SearchBar 
              getWeather={getWeather}
              query={query}
              setQuery={setQuery}
              setLoading={setLoading}
              getLocation={getLocation}
              />
            <div className="col-12"> 
                <div className="card card-weather">
                {(typeof weather.main != "undefined") ? (
                      <div>
                    <div className={(typeof weather.main != "undefined") ? ('card-body '+styleWeather(weather.weather[0].id)) : 'card-body'}>
                        <div className="weather-date-location">
                            <h3>{weather.name}, {weather.sys.country}</h3>
                            <p className="text-gray"> <span className="weather-date">{day}</span></p>
                        </div>
                        <div className="weather-data d-flex">
                            <div className="mr-auto">
                                <h4 className="display-3">{Math.floor(weather.main.temp)}<span className="symbol">°</span>C</h4>
                                <p>{weather.weather[0].description} </p>
                                <p>Min: {Math.floor(weather.main.temp_min)}<span className="symbol">°</span>C</p>
                                <p>Max: {Math.round(weather.main.temp_max)}<span className="symbol">°</span>C</p>
                                <p>Viento: {Math.floor(weather.wind.speed*3.64)}<span className="symbol"> km</span>/h</p>
                                <p className="p-0 m-0">Humedad: {weather.main.humidity}<span className="symbol"> %</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                    {(typeof forecast.lat != "undefined") ? (
                    <div className="d-flex weakly-weather">
                          {forecast.daily.map((day, i)=>(
                            i === 0 ?  false : 
                              <div className="weakly-weather-item" key={day.dt}>
                                  <div className="d-flex justify-content-center align-items-center text-muted">
                                    <p className="mb-0">{dateBuilder(new Date(day.dt*1000))}</p>
                                    <p className="mb-0 ml-1">{styleForecast(day.weather[0].id)}</p>
                                    
                                  </div>
                              <div className="d-flex align-items-center justify-content-center flex-column">
                              <p className="mb-0 p-1 d-flex align-items-center justify-content-center">{Math.round(day.temp.max)}° <span className="arrow-up ml-1"></span></p>
                              <p className="mb-0 p-1  d-flex align-items-center justify-content-center">{Math.floor(day.temp.min)}° <span className="arrow-down ml-1"></span> </p>
                              </div>
                              </div>
                          ))}
                      </div>
                       ) : 
                       (<div>Error en la carga del pronóstico.</div>)}
                      </div>
                    </div>
                    ) : 
                    (<div>Error en la carga del clima.</div>)
                    }
                </div>
            </div>
        </div>
        </div>
    )
}
