// Init storate
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.units);

// Check units
const measure = weather.units;


// Init UI
const ui = new UI();

// Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{

    var e = document.getElementById('city list');
    const city = e.options[e.selectedIndex].value;
    const units = document.getElementById('units').value;

    // Change location
    weather.changeLocation(city, units);

    // Set locations in LS
    storage.setLocationData(city, units);

    // Get and display weather
    getWeather();
});

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

function PopulateDropDownList() {
        
    var listItems = document.getElementById('city list');

   // Add places from JSON file to dropdown list
    for (var i = 0; i < places.length; i++){
    
        var option = document.createElement('option'); 
        option.innerHTML = `${places[i].name}, ${places[i].country}`;
        option.value = places[i].id;
        listItems.add(option);
    }
}





    

  
