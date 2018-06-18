'use strict';
// variable to hold array of functions created later in code
var allStores = [];
//hours the stores are open, kept as global variable
var storeHours = [' ','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//links table created herex to table listed in html
var cookieTable = document.getElementById('stores');
var storeLocations = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki'];


function storeTableLables() {
  for (var i = 0; i < storeLocations.length; i++) {
    var trElement = document.createElement('tr');
    cookieTable.appendChild(trElement);
    var tdElement = document.createElement('td');
    tdElement.textContent = storeLocations[i];
    trElement.appendChild(tdElement);
  }
}


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
    for (var i = 0; i < storeHours.length; i++) {
      this.averageCustPerHour.push(Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour));
    }
  };
  this.cookiesPerHour = function() {
    for (var i = 0; i < this.averageCustPerHour.length; i++) {
      this.averageCookiesPerHour.push(Math.round(this.averageCustPerHour[i] * this.cookiesPerCust));
    }
  };
  this.custPerHour();
  this.cookiesPerHour();
  allStores.push(this);
}




var pikeStore = new Store(23, 65, 6.3, '1st and Pike');
var seaTacStore = new Store(3, 24, 1.2, 'SeaTac Airport');
var seattleCenterStore = new Store(11, 38, 3.7, 'Seattle Center');
var capHillStore = new Store(20, 38, 2.3, 'Capital Hill');
var alkiStore = new Store(2, 16, 4.6, 'Alki');





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
};
//function for adding a row of times to the top of the table
function header() {
  var trElement = document.createElement('tr');
  cookieTable.appendChild(trElement);
  for (var i = 0; i < storeHours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = storeHours[i];
    trElement.appendChild(tdElement);
  }
}



/* tdElement = document.createElement('td');
  tdElement.textContent = this.maxCustHour;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.averageCookies;
  trElement.appendChild(tdElement);



  storesTable.appendChild(trElement); */


storeTableLables();
header();
pikeStore.renderRow();
seaTacStore.renderRow();
seattleCenterStore.renderRow();
capHillStore.renderRow();
alkiStore.renderRow();