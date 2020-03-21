class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.coord = document.getElementById('w-coord');
        this.main = document.getElementById('w-main');
    }

paint(weather){
  
    const temp_c = weather.main.temp;
    const feels_like_c = weather.main.feels_like;
    const feels_like_f = Math.round(feels_like_c*100*9/5)/100+32;
    const temp_f = Math.round(temp_c*9*100/5)/100+32;
    const icon_url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;


    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.desc.textContent = weather.weather[0].description;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.main.textContent = `${localStorage.units} units first. Temp: ${temp_c}°C (${temp_f}°F)`;
    this.feelsLike.textContent = `Feels Like: ${feels_like_c}°C (${feels_like_f}°F)`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} (${weather.wind.deg} deg)`
    this.icon.setAttribute('src', icon_url);


    PopulateDropDownList();

}

}