class Storage {
    constructor(){
        this.city;
        this.units;
        this.defaultCity = "1007311";
        this.defaultUnits = "metric";
    }
       
    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
    }

        if(localStorage.getItem('units') === null){
            this.units = this.defaultUnits;
            console.log(this.units);
        } else {
            this.units = localStorage.getItem('units');
        }

        return {
            city: this.city,
            units: this.units
        }

    }

    setLocationData(city, units){
        localStorage.setItem('city', city);
        localStorage.setItem('units', units);
    }


}

