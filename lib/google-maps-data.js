const fetch = require('node-fetch');

async function fetchGeoData(zipcode) {
    const geoApi = `https://maps.googleapis.com/maps/api/geocode/json?components=country:DE&postal_code:${zipcode}&key=AIzaSyDUkLIlWufKEDPHMzt72oB1Gnw0-yaEgu8`;

    const response = await fetch(geoApi);
    const data = await response.json();
    var latlong = data.results[0].geometry.location;

    return fetchNearSupermarkets(latlong);

};


async function fetchNearSupermarkets(latlong) {
    const lat = latlong["lat"];
    const lng = latlong["lng"];
    const supermarketApi = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=supermarket&key=AIzaSyDUkLIlWufKEDPHMzt72oB1Gnw0-yaEgu8`;

    const response = await fetch(supermarketApi);
    const data = await response.json();

    var result = {};
    for (const index in data.results) {
        const marketname = data.results[index].name;
        const latlng = data.results[index].geometry.location;
        result[marketname] = latlng;
    };

    return result;

};

export default fetchGeoData;
