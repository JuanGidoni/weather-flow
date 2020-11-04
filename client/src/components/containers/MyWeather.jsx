import React from 'react'
import SearchBar from '../containers/SearchBar'

export default function MyWeather({
    day,
    weather,
    getWeather,
    query,
    setQuery,
    styleWeather,
    forecast,
    setLoading,
    dateBuilder,
    getLocation
}) {

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
                {(typeof weather.main != "undefined") ? (
                <div className="card card-weather">
                    <div className={(typeof weather.main != "undefined") ? (`card-body ${styleWeather(weather.weather[0].id)}`) : 'card-body'}>
                        <div className="weather-date-location d-flex flex-column justify-content-center align-items-start">
                            <h3 className="d-flex justify-content-center align-items-center">{weather.name}, {weather.sys.country}<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} title={weather.weather[0].description} alt={weather.weather[0].description}/></h3>
                            <p className="text-gray"> <span className="weather-date">{day}</span></p>
                            <p className="text-gray"> <span className="weather-date">Lat: {weather.coord.lat}, Lon: {weather.coord.lon}</span></p>
                        </div>
                        <div className="weather-data d-flex align-items-start justify-content-center">
                            <div className="mr-auto">
                                <div className="temp d-flex justify-content-center align-items-center text-white">
                                <h4 className="display-3">{Math.floor(weather.main.temp)}<span className="symbol">°</span>C</h4>
                                <div className="flex-column ml-2">
                                <p className="mb-0 p-1 d-flex align-items-center justify-content-center">{Math.round(weather.main.temp_max)}° <span className="arrow-up ml-1"></span></p>
                                <p className="mb-0 p-1  d-flex align-items-center justify-content-center">{Math.floor(weather.main.temp_min)}° <span className="arrow-down ml-1"></span> </p>
                                </div>
                                </div>
                                <p className="text-gray">{weather.weather[0].description} </p>
                              </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                    {(typeof forecast.lat != "undefined") ? (
                    <div className="d-flex weakly-weather">
                          {forecast.daily.map((day, i)=>(
                            i === 0 || i === 6 || i === 7 ? false : 
                              <div className="weakly-weather-item" key={day.dt}>
                                  <div className="d-flex flex-column justify-content-center align-items-center text-muted">
                                    <p className="mb-0">{dateBuilder(new Date(day.dt*1000))}</p>
                                    <p className="mb-0 ml-1"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} title={day.weather[0].description} /></p>
                                    
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
    )
}
