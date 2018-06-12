'use strict';

var pikeStore = {
  minHours: 23,
  maxHours: 65,
  averageCookies: 6.3,
}

var pikeStats = ['pikeAverageCust', 'pikeStore.averageCookies'];

function pikeAverageCust(min, max) {
    var min = Math.floor(pikeStore.minHours);
    var max = Math.ceil(pikeStore.maxHours);
    var randomCustomers = (Math.random() * (max - min + 1)) + min;
    return(randomCustomers);
}




pikeAverageCust();

   
      
      



