'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeStore = {
  minCustHour: 23,
  maxCustHour: 65,
  averageCookies: 6.3,

  pikeAverageCust: function()  {
    return Math.round(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);

  },
  pikeTotalCookies: function() {
    return Math.round(this.pikeAverageCust() * this.averageCookies);
  },
  generateList: function() {
    var ulEl = document.getElementById('pikeStoreSales');
    var runningTotal = 0;

    for(var i =0; i < hours.length; i++) {
      var liEl = document.createElement('li');

      var liRandomNum = this.pikeAverageCust();

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

  seaTacAverageCust: function()  {
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

    centerAverageCust: function()  {
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
  
    capHillAverageCust: function()  {
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
  



pikeStore.generateList();
seaTacStore.generateList();
centerStore.generateList();
capHillStore.generateList();