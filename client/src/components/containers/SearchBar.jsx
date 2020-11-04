import React from 'react'
import MapIMG from '../../assets/map.png'

export default function SearchBar({
    getWeather,
    query,
    setLoading,
    setQuery,
    getLocation
}) {
        
// funcion flecha para la busqueda del clima segun ciudad
const search = evt => {
    if(!evt.target.value){
      let s = document.getElementById('sendsearch')
      s.placeholder = 'Por favor ingresar una ciudad o pais'
      s.style.border = '1px solid red'
      setTimeout(() => {
        s.style.border = 'none'
      }, 2000);
    }else{
        if(evt.type === "click"){
        setLoading(true)
        getWeather(evt.target.value)
        setQuery('')
        }
        if (evt.key === "Enter") {
          setLoading(true)
          getWeather(evt.target.value)
          setQuery('')
        }
    }
}
    return (
        <div className="col-lg-12 d-flex justify-content-center align-items-center mb-1">
            <button onClick={getLocation} className="btn btn-dark search-btn d-flex flex-row flex-fill mr-1"><img alt="Buscar por mi ubicación" src={MapIMG} className="map-img" /></button>
                <input 
                id="sendsearch"
                type="text"
                className="search-bar form-control flex-fill mr-1"
                placeholder="Buscar por ciudad..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
                />
                <button onClick={search} value={query} className="btn btn-dark search-btn flex-fill">Buscar</button>
        </div>
    )
}
