'use strict';

var Seattle = {

    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    
    minCustomers: 23,
    maxCustomers: 65,
    avg: 6.3,
    custArr : [],
    cookArr : [],


    CustPerHrs: function(){

        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },

    Sales : [],

    CookiesPerHrs: function(){

        var total = 0;

        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
        };
        this.Sales[14]='Total:'+total+' cookies';
    },

    render : function(){

        var container = document.getElementById('cookies');
        var title = document.createElement('h1');
        container.appendChild(title);
        title.textContent= 'Salmon Cookies Sales Page'
        console.log('container= ', container);

        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Seattle');

        var ul = document.createElement('ul');
        container.appendChild(ul);

        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }

    }
};

Seattle.CustPerHrs();
Seattle.CookiesPerHrs();
Seattle.render();


var Tokyo = {

    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    
    minCustomers: 3,
    maxCustomers: 24,
    avg: 1.2,
    custArr : [],
    cookArr : [],


    CustPerHrs: function(){

        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },

    Sales : [],

    CookiesPerHrs: function(){

        var total = 0;

        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
        };
        this.Sales[14]='Total:'+total+' cookies';
    },

    render : function(){

        var container = document.getElementById('cookies');
        console.log('container= ', container);

        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Tokyo');

        var ul = document.createElement('ul');
        container.appendChild(ul);

        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }

    }
};

Tokyo.CustPerHrs();
Tokyo.CookiesPerHrs();
Tokyo.render();

var Dubai = {

    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    
    minCustomers: 11,
    maxCustomers: 38,
    avg: 3.7,
    custArr : [],
    cookArr : [],


    CustPerHrs: function(){

        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },

    Sales : [],

    CookiesPerHrs: function(){

        var total = 0;

        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
        };
        this.Sales[14]='Total:'+total+' cookies';
    },

    render : function(){

        var container = document.getElementById('cookies');
        console.log('container= ', container);

        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Dubai');

        var ul = document.createElement('ul');
        container.appendChild(ul);

        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }

    }
};

Dubai.CustPerHrs();
Dubai.CookiesPerHrs();
Dubai.render();

var Paris = {

    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    
    minCustomers: 20,
    maxCustomers: 38,
    avg: 2.3,
    custArr : [],
    cookArr : [],


    CustPerHrs: function(){

        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },

    Sales : [],

    CookiesPerHrs: function(){

        var total = 0;

        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
        };
        this.Sales[14]='Total:'+total+' cookies';
    },

    render : function(){

        var container = document.getElementById('cookies');
        console.log('container= ', container);

        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Paris');

        var ul = document.createElement('ul');
        container.appendChild(ul);

        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }

    }
};

Paris.CustPerHrs();
Paris.CookiesPerHrs();
Paris.render();

var Lima = {

    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    
    minCustomers: 2,
    maxCustomers: 16,
    avg: 4.6,
    custArr : [],
    cookArr : [],


    CustPerHrs: function(){

        for(var i=0; i<this.hours.length; i++){
        var custAvg =  Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers+1) ) + this.minCustomers;
        console.log('Customers per hour',custAvg);
        this.custArr[i]= Math.ceil(custAvg);
        };
    },

    Sales : [],

    CookiesPerHrs: function(){

        var total = 0;

        for (var i=0; i<this.hours.length; i++){
            this.cookArr[i] = Math.ceil(this.custArr[i]*this.avg);
            total = total+ this.cookArr[i];
            this.Sales[i] = this.hours[i] + ': ' + this.cookArr[i] + ' cookies';
        };
        this.Sales[14]='Total:'+total+' cookies';
    },

    render : function(){

        var container = document.getElementById('cookies');
        console.log('container= ', container);

        var hearder = document.createElement('h2');
        container.appendChild(hearder);
        hearder.textContent=('Lima');

        var ul = document.createElement('ul');
        container.appendChild(ul);

        for(var i=0; i<this.Sales.length;i++){
            var li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = this.Sales[i];
        }

    }
};

Lima.CustPerHrs();
Lima.CookiesPerHrs();
Lima.render();


