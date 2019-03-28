class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        console.log("hello");
        this.initialize();
    }

    initialize() {
        this.getMyLocation();
    }

    getMyLocation() {
        console.log("getting location");
        navigator.geolocation.getCurrentPosition(position => {  
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
        }, err => {
            console.log(err);
        });
    }

    getWeather(lat, lng) {
        // ajax call / xhr
        // fetch
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.summary;
            document.querySelector("body").appendChild(temp);
        })
    }
}

class Photo {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        console.log("hello");
        this.initialize();
}

    initialize() {
        this.getMyPhoto();
    }

    getMyPhoto() {
        let url = ``;
    }
}

let app = new Weather('3766c6dfc2af358482b42e03a0548277');