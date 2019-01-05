const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cdudad',
        demand: true
    }
}).argv;

let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);

        return `el clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        console.log('No se pudo determinar el clima');
    }
}

getInfo()
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))
    /*
    lugar.getLugarLatLng(argv.direccion)
        .then(resp => {
            console.log(resp);
        })
        .catch(e => console.log(e));
        */