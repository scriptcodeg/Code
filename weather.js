class Weather {
    constructor(city, units){
        this.apiKey = 'f31aadfc3719c5d36747bd7458b18cb4';
        this.city = city;
        this.units = units;
    }

    // Fetch weather from API
    async getWeather(){

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${this.city}&APPID=${this.apiKey}&units=${this.units}`);   
        const responseData = await response.json();

        return responseData;
    }
 
        // Change weather location
        changeLocation(city, units){
            this.city = city;
            this.units = units;       
        }    
    }

