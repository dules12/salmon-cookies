'use strict';
var allStores = [];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4am', '5am', '6am', '7am', '8am'];
var cookieTable = document.getElementById('stores');



function Store(minCustHour, maxCustHour, cookiesPerCust, storeLocation) {
  //these four are passed in
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.cookiesPerCust = cookiesPerCust;
  this.storeLocation = storeLocation;
  //everything below here is an output
  this.averageCustPerHour = [];
  this.averageCookiesPerHour = [];
  //this.averageSalesPerHourAllLocations = averageSalesPerHourAllLocations;
  //this.totalDaySalesByLocation = totalDaySalesByLocation;
  //this.totalDaySalesAllLocations = totalDaySalesAllLocations;


  this.custPerHour = function() {
    console.log('helo there');
    for (var i = 0; i < storeHours.length; i++) {
      this.averageCustPerHour.push(Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour));
    }
  };
  this.cookiesPerHour = function() {
    for (var i = 0; i < this.averageCustPerHour.length; i++) {
      this.averageCookiesPerHour.push(Math.round(this.averageCustPerHour[i] * this.cookiesPerCust));
    }

    console.log(this.averageCustPerHour);
    console.log(this.averageCookiesPerHour);
  
  };
  this.custPerHour();
  this.cookiesPerHour();
  allStores.push(this);
}



var pikeStore = new Store(23, 65, 6.3, '1st and Pike');
console.log(pikeStore.averageCookiesPerHour[0]);





Store.prototype.renderRow = function () {
  //creating table row and appending to table
  var trElement = document.createElement('tr');
  cookieTable.appendChild(trElement);
  for (var i = 0; i < storeHours.length; i++) {
    

    //creating table data 
    var tdElement = document.createElement('td');
    tdElement.textContent = this.averageCookiesPerHour[i];

    // append table data to table row
    trElement.appendChild(tdElement);
  }


  /* tdElement = document.createElement('td');
  tdElement.textContent = this.maxCustHour;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.averageCookies;
  trElement.appendChild(tdElement);



  storesTable.appendChild(trElement); */
};

pikeStore.renderRow();


/* Pike Place Store Object
var pikeStore = {
  minCustHour: 23,
  maxCustHour: 65,
  averageCookies: 6.3,

  //Function that gives a random number of customers per hour within its min-max range
  pikeAverageCust: function() {
    return Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);

  },
  //takes above function and multiplies number by average number of cookies purchashed by each customer
  pikeTotalCookies: function() {
    return Math.round(this.pikeAverageCust() * this.averageCookies);
  },
  //establishes variable to connect data to the html sales doc and specifically to the below titled list.
  generateList: function() {
    var ulEl = document.getElementById('pikeStoreSales');
    var runningTotal = 0;

    for(var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      var liRandomNum = this.pikeAverageCust();
      //text that will appear in the sales doc
      liEl.textContent = hours[i] + ': ' + liRandomNum + ' cookies';
      runningTotal += liRandomNum;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + runningTotal;
    ulEl.appendChild(totalEl);
  }
};

var seaTacStore = {
  minCustHour: 3,
  maxCustHour: 24,
  avgCookies: 6.3,

  seaTacAverageCust: function() {
    return Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);

  },
  SeaTacTotalCookies: function() {
    return Math.round(this.pikeAverageCust() * this.averageCookies);
  },
  generateList: function() {
    var ulEl = document.getElementById('airportSales');
    var runningTotal = 0;

    for(var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      var liRandomNum = this.seaTacAverageCust();

      liEl.textContent = hours[i] + ': ' + liRandomNum + ' cookies';
      runningTotal += liRandomNum;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + runningTotal;
    ulEl.appendChild(totalEl);
  }
};

var centerStore = {
  minCustHour: 11,
  maxCustHour: 38,
  avgCookies: 3.7,

  centerAverageCust: function() {
    return Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);

  },
  centerTotalCookies: function() {
    return Math.round(this.centerAverageCust() * this.averageCookies);
  },
  generateList: function() {
    var ulEl = document.getElementById('seattleCenterSales');
    var runningTotal = 0;

    for(var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      var liRandomNum = this.centerAverageCust();

      liEl.textContent = hours[i] + ': ' + liRandomNum + ' cookies';
      runningTotal += liRandomNum;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + runningTotal;
    ulEl.appendChild(totalEl);
  }
};

var capHillStore = {
  minCustHour: 20,
  maxCustHour: 38,
  averageCookies: 2.3,

  capHillAverageCust: function() {
    return Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);

  },
  capHillTotalCookies: function() {
    return Math.round(this.capHillAverageCust() * this.averageCookies);
  },
  generateList: function() {
    var ulEl = document.getElementById('capitalHillSales');
    var runningTotal = 0;

    for(var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      var liRandomNum = this.capHillAverageCust();

      liEl.textContent = hours[i] + ': ' + liRandomNum + ' cookies';
      runningTotal += liRandomNum;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + runningTotal;
    ulEl.appendChild(totalEl);
  }
};

var alkiStore = {
  minCustHour: 2,
  maxCustHour: 16,
  averageCookies: 4.6,

  alkiAverageCust: function() {
    return Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);

  },
  alkiTotalCookies: function() {
    return Math.round(this.alkiAverageCust() * this.averageCookies);
  },
  generateList: function() {
    var ulEl = document.getElementById('alkiSales');
    var runningTotal = 0;

    for(var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      var liRandomNum = this.alkiAverageCust();

      liEl.textContent = hours[i] + ': ' + liRandomNum + ' cookies';
      runningTotal += liRandomNum;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + runningTotal;
    ulEl.appendChild(totalEl);
  }
};





pikeStore.generateList();
seaTacStore.generateList();
centerStore.generateList();
capHillStore.generateList();
 alkiStore.generateList(); */