"use strict";


class weatherModel {
    constructor(date,description,low_temp,max_temp){
        this.date=date;
        this.description=description;
        this.low_temp=low_temp;
        this.max_temp=max_temp;
    }
}

module.exports=weatherModel;