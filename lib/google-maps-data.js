function fetchGeoData(zipcode) {
    const geoApi = `https://maps.googleapis.com/maps/api/geocode/json?components=country:DE&postal_code:${zipcode}&key=AIzaSyDUkLIlWufKEDPHMzt72oB1Gnw0-yaEgu8`;

    var latlong = []
    fetch(geoApi)
        .then(response => {
            latlong = response.json().results.location;
        })
        .then(data => {
            console.log(data);
        });
    return fetchNearSupermarkets(latlong)
};


// TODO: Test and refactor this
function fetchNearSupermarkets(latlong) {
    const supermarketApi = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=100&type=supermarket&key=AIzaSyDUkLIlWufKEDPHMzt72oB1Gnw0-yaEgu8`;
    const lat = latlong[0]
    const long = latlong[1]

    var result = {};
    fetch(supermarketApi)
        .then(response => {
            for (const dict in response.json().results) {
                const name = dict.name
                const street = dict.vicinity;
                result[name] = street
            }
        })

    return result
};

export default fetchGeoData();