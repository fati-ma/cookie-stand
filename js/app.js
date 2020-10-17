'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationsArr = [];

function CookieShop(locationName, minCust, maxCust, avrCookie) {

    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avrCookie = avrCookie;
    this.custPerHourArr = [];
    this.cookiesPerHourArr = [];
    this.totalCookies = 0;

    locationsArr.push(this);

}

CookieShop.prototype.calcCustPerHour = function () {

    for (var i = 0; i < hour.length; i++) {
        var customer = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
        this.custPerHourArr.push(customer);
    }
}

CookieShop.prototype.calcCookiesPerHour = function () {
    for (var i = 0; i < hour.length; i++) {
        var cookiePerHour = Math.floor(this.custPerHourArr[i] * this.avrCookie);
        this.cookiesPerHourArr.push(cookiePerHour);
        this.totalCookies += cookiePerHour;
    }
    console.log(this.totalCookies);
}

var seattle = new CookieShop('Seattle', 23, 65, 6.3);
seattle.calcCustPerHour();
seattle.calcCookiesPerHour();
console.log(seattle);
var tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
tokyo.calcCustPerHour();
tokyo.calcCookiesPerHour();
console.log(tokyo);
var dubai = new CookieShop('Dubai', 11, 38, 3.7);
dubai.calcCustPerHour();
dubai.calcCookiesPerHour();
console.log(dubai);
var paris = new CookieShop('Paris', 20, 38, 2.3);
paris.calcCustPerHour();
paris.calcCookiesPerHour();
console.log(paris);
var lima = new CookieShop('Lima', 2, 16, 4.6);
lima.calcCustPerHour();
lima.calcCookiesPerHour();
console.log(lima);


function tableTitle() {
    var container = document.getElementById("cookiesTable");
    var title = document.createElement("h1");
    container.appendChild(title);
    title.textContent = "Salmon Cookies Sales Statistics";
}

var table = document.createElement('table');


function createHeader() {

    var trrE1 = document.createElement('tr');
    var thhE1 = document.createElement('th');
    trrE1.appendChild(thhE1);
    thhE1.textContent = 'Location';

    for (var i = 0; i < hour.length; i++) {
        var thE2 = document.createElement('th');
        thE2.textContent = hour[i];
        trrE1.appendChild(thE2);

    }

    var thE3 = document.createElement('th');
    thE3.textContent = "Daily Location Total";
    trrE1.appendChild(thE3);
    table.appendChild(trrE1);

}


CookieShop.prototype.render = function () {

    var container = document.getElementById("cookiesTable");
    container.appendChild(table);

    var trE1 = document.createElement('tr');
    
    var tdE2 = document.createElement('td');
    trE1.appendChild(tdE2);
    tdE2.textContent = this.locationName;
    
    for (var i = 0; i < this.cookiesPerHourArr.length; i++) {
        var tdE3 = document.createElement('td');
        tdE3.textContent = this.cookiesPerHourArr[i];
        trE1.appendChild(tdE3);
    }
    
    var tdE4 = document.createElement('td');
    tdE4.textContent = this.totalCookies;
    trE1.appendChild(tdE4);
    
    table.appendChild(trE1);

}

function total() {
    
    var trE2 = document.createElement('tr');
    var tdE5 = document.createElement('td')
    trE2.appendChild(tdE5);
    tdE5.textContent = 'Totals';
    
    for (var j = 0; j < hour.length; j++) {
        var cookieInHour =0;
        for (var i = 0; i < locationsArr.length; i++) {
            var tdE6 = document.createElement('td');
            cookieInHour += locationsArr[i].cookiesPerHourArr[j];
        }
        tdE6.textContent = cookieInHour;
        trE2.appendChild(tdE6);
    }
    var hourTotal=0;
    for (var i=0; i<locationsArr.length;i++){
        hourTotal += locationsArr[i].totalCookies;
    }
    
    var tdE7 = document.createElement('td');
    tdE7.textContent = hourTotal;
    trE2.appendChild(tdE7);
    table.appendChild(trE2);
}

function renderShops (){
    for (var i=0; i<locationsArr.length; i++){
        locationsArr[i].render();
    }
}

tableTitle();
createHeader();
renderShops();
total();

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    
    function display_ct() {
    var x = new Date()
    //document.getElementById('ct').innerHTML = x;
    document.getElementById('t1').value = x;
    display_c();
}
onload=display_ct();





    // var tableHeaders = ['Location', '6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    // var tableRows = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 'Totals'];  


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

//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	

});//DOCUMENT READY
	


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
		
	