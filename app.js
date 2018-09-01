const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/command').argv;
const colors = require('colors');

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `=======Datos del lugar a buscar======
*Direccion: ${coors.direccion}
*Latitud: ${coors.lat}
*Longitud: ${coors.lng}
====Datos climaticos de la ciudad====
*Temperatura: ${temp.temp}
*Humedad: ${temp.Humedad}
*Temperatura Minima: ${temp.tempMin}
*Temperatura Maxima: ${temp.tempMax}`;

}


getInfo(argv.direccion)
    .then(mensaje => console.log(colors.red(mensaje)))
    .catch(e => console.log(e));