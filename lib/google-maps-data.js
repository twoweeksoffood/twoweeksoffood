const fetch = require('node-fetch');

function fetchGeoData(zipcode) {
    const geoApi = `https://maps.googleapis.com/maps/api/geocode/json?components=country:DE&postal_code:${zipcode}&key=AIzaSyDUkLIlWufKEDPHMzt72oB1Gnw0-yaEgu8`;

    fetch(geoApi)
        .then(response => response.json())
        .then(data => {
            latlong = data.results[0].geometry.location;
            return fetchNearSupermarkets(latlong);
        })
        .catch(err => console.log(err))

};


function fetchNearSupermarkets(latlong) {
    const lat = latlong["lat"];
    const lng = latlong["lng"];
    const supermarketApi = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=supermarket&key=AIzaSyDUkLIlWufKEDPHMzt72oB1Gnw0-yaEgu8`;

    var result = {};
    fetch(supermarketApi)
        .then(response => response.json())
        .then(data => {
            for (const index in data.results) {
                const marketname = data.results[index].name;
                const latlng = data.results[index].geometry.location;
                result[marketname] = latlng;
            }
            console.log("In function result: ", result)
        })
        .catch(err => console.log(err))
    return result;

};

console.log("Outside function result: ", fetchNearSupermarkets({lat: 51.165681, lng: 10.451526}))

export default fetchGeoData;
