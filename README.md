# weather-fullstack-app

Web App para obtener el clima actual en tu ubicación o por busqueda por ciudades/pais.

// Se agregaron comentarios en varias lineas de código para respaldar y documentar.

## test online

Depolyed with Heroku. https://weather-fullstack.herokuapp.com/

## test on your localhost

### Backend

`cd server`

`npm install`

`npm run dev`


### Frontend

`cd client`

`npm install`

`npm start`


### Version Updates

----- 0.19.1

* [x] Se removieron los //comentarios añadidos a forma de documentar/recalcar que/donde se hizo.
* [x] Se mejoraron algunas funciones de backend y frontend.

----- 0.19

* [x] Se arreglaron algunos bugs visuales en mobile y se adapto el diseño a "dark mode".
* [x] Ahora el pronóstico es a 5 días. 
* [x] Se implementaron mejoras visuales, utilizando los iconos provenientes de OpenWeatherMap y se mejoraron las imagenes utilizados
en el fondo del componente "MyWeather".

----- 0.18

* [x] Cambios en el código. (Componentes y Funciones)

----- 0.17

* [x] Se mejoro la estructura del código y las funciones
* [x] Se modifico el diseño (componentes)
* [x] Se agrego pronóstico de los siguientes 7 dias (v 0.17.01)

----- 0.16

* [x] Se implemento un "Loading" de la información para mejorar UX/IX
* [x] Se modifico la busqueda actual de tu posición (previamente con navigator.geoLocation) ahora con web de terceros: https://geolocation-db.com/json/
(retorna un json con información ipv4, latitud, longitud, ciudad, pais, etc...) 

----- 0.15

* [x] Se implemento una barra para busqueda por ciudades, ademas,
    2 botones: 1 para tu ubicación actual y otro para realizar la busqueda. (La busqueda toma tambien el keyPress "enter")
* [x] Se implemento cambio del fondo del contenedor del clima, como tambien el contenedor general segun la busqueda y el clima obtenido.
* [x] Ahora si la busqueda no es valida, se notifica al usuario que la ciudad no existe o no se encontro dicha ciudad.

----- 0.14

* [x] Se termino de implementar el frontend (React)

---- 0.13

* [x] Se termino de implementar las routes para la API *backend

---- 0.12

* [x] Se instalaron las dependencias para la parte del frontend

---- 0.11

* [x] Se instalaron las dependencias para la parte de backend.
