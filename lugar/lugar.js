const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultado');
    }


    // console.log(JSON.stringify(resp.data, undefined, 2));
    let location = resp.data.results[0];
    let cord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lag: cord.lat,
        lng: cord.lng
    }
}

module.exports = {
    getLugarLatLng
}