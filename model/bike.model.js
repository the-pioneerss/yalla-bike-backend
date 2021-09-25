"use strict";

class bikeModel {
    constructor(name, company, id, city, country, latitude, longitude) {
        this.name = name;
        this.company = company;
        this.id = id;
        this.city = city;
        this.country = country;
        this.latitude = latitude;
        this.longitude = longitude
    }
}

module.exports={
    bikeModel
}
