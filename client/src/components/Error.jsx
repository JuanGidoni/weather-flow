import React from 'react'
import SearchBar from './containers/SearchBar'

export default function Error({code, day, getWeather, query, setQuery,setLoading,getLocation}) {
    return (
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
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h3>{code.code}</h3>
                            <p className="text-gray"> <span className="weather-date">{code.message}</span></p>
                        </div>
                    </div>
                    <p className="text-gray text-center"><span className="weather-date">{day}</span></p>
                </div>
            </div>
        </div>
    )
}
