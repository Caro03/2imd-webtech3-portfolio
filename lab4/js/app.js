class Weather {
    constructor(API_KEY, API_PIC) {
        this.API_KEY = API_KEY;
        this.API_PIC = API_PIC;
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
            let picture;
            this.getWeather(lat, lng);
            this.getPic(picture);
        }, err => {
            console.log(err);
        });
    }

    getWeather(lat, lng) {
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
            .then(response => {
                return response.json();
            }) 
            .then(json => {
                let temp = document.createElement("h1");
                temp.innerHTML = json.currently.summary;
                //document.getElementById('weather').style.color = 'black';
                document.querySelector(".weather").appendChild(temp);
            });
    }

    getPic(picture) {
        console.log("hi");
        let url = `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=11991618-dc6ef88e6d4550cf854071bb3&image_type=photo&category=nature`;
        fetch(url)
            .then(response => {
                return response.json();
               
                
            }) 
            .then(json => {
                console.log(json);
                let random = Math.floor(Math.random() * 10);
                // hier wordt een random picture gekozen uit largeImageURL
                let picture = json.hits[random].largeImageURL;
                document.querySelector(".image").setAttribute("src", picture);
            });
    }
}


let app = new Weather('3766c6dfc2af358482b42e03a0548277', '11991618-dc6ef88e6d4550cf854071bb3');