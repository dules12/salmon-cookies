'use strict';

//Only global variable, array made up of hours each store is opened
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Pike Place Store Object
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
alkiStore.generateList();