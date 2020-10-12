'use strict';

var hour = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationsArr = [];

function CookieShop(locationName, minCust, maxCust, avrCookie){

    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avrCookie = avrCookie;
    this.custPerHourArr = [];
    this.cookiesPerHourArr = [];
    this.totalCookies = 0;
    
    locationsArr.push(this);

}

CookieShop.prototype.calcCustPerHour= function(){
    
    for (var i=0; i<hour.length; i++){
        var customer = Math.floor(Math.random() * (this.maxCust - this.minCust) ) + this.minCust;
        this.custPerHourArr.push(customer);
    }
}

CookieShop.prototype.calcCookiesPerHour = function(){
    for (var i=0; i<hour.length;i++){
        var cookiePerHour = Math.floor(this.custPerHourArr[i]*this.avrCookie);
        this.cookiesPerHourArr.push(cookiePerHour);
        this.totalCookies += cookiePerHour;
    }
    console.log(this.totalCookies);
}

var seattle = new CookieShop('Seattle', 23, 65, 6.3)
seattle.calcCustPerHour();
seattle.calcCookiesPerHour();
console.log(seattle);


var table = document.createElement('table');
function createHeader () {

    var thE1 = document.createElement('th');
    var tdE1 = document.createElement('td');
    thE1.appendChild(tdE1);
    tdE1.textContent = '';

    for (var i=0; i<hour.length; i++){
        var thE2 = document.createElement('th');
        thE1.appendChild(thE2);
        thE2.textContent = hour[i];

    }

    var thE3 = document.createElement('th');
    thE1.appendChild(thE3);
    thE3.textContent = "Total";
    table.appendChild(thE1);

}

console.log(createHeader());


CookieShop.prototype.render = function(){
    
    var container = document.getElementById("cookiesTable");
    
    var title = document.createElement("h1");
    container.appendChild(title);
    title.textContent = "Salmon Cookies Sales Page";

    // var table = document.createElement("table");
    container.appendChild(table);

    var trE1 = document.createElement('tr');
    table.appendChild(trE1);

    var tdE2 = document.createElement('td');
    trE1.appendChild(tdE2);
    tdE2.textContent = this.locationName;

    // var tableHeaders = ['Location', '6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    // var tableRows = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Totals'];  
}



seattle.render();



//     // for (var i=0; i<tableRows.length; i++){
//     //   var row = document.createElement("tr");
//     //   table.appendChild(row);
//     //   row.textContent = locationsArr[i];
//     // }

//     var row = document.createElement('tr');
//     table.appendChild(row);

//     var header = document.createElement('th');
//     row.appendChild(header);

//     // var cell = document.createElement('td');
//     // row.appendChild(cell);
//     // cell.textContent = "A";
    
//     // var goodStuff = ['good with cats','good with dogs','good with kids'];
//     for(var i=0; i<5;i++){
//     var listOfLoc = document.createElement('td');
//     listOfLoc.textContent = this.locationName;
//     row.appendChild(listOfLoc);

//     }
//     for(var i=0; i<tableHeaders.length; i++) {
//         var thE = document.createElement('th');
//         row.appendChild(thE);
//         thE.textContent = tableHeaders[i];
//     }
    
//     // var row2 = document.createElement('tr');
//     // for(var i=0; i<tableRows.length; i++) {
//     //     var tdE = document.createElement('td');
//     //     // trE.setAttribute("scope", "row");
//     //     row2.appendChild(listOfLoc);
//     //     listOfLoc.textContent = tableRows[i];
//     //   }

// //     for (var j=0; j<tableRows; j++) {
// //       for (var i=0; i<tableHeaders.length; i++){ 
// //           var  row2 = document.createElement('tr');
// //           var tdE = document.createElement('td');
// //           row2.appendChild(tdE);
// //           tdE.textContent = this.locationName;
// //     }
// // }
    