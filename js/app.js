'use strict';

var hour = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieShop(minCust, maxCust, avrCookie, custPerHourArr){
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avrCookie = avrCookie;
    this.custPerHourArr = custPerHourArr;


}

CookieShop.prototype.calcCustPerHour= function(){
    for (var i=0; i<hour.length; i++){
        var customer = Math.floor(Math.random() * (this.maxCust - this.minCust) ) + this.minCust;
        this.custPerHourArr.push(customer);
    }
}

