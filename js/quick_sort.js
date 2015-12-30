"use strict";
var quickSortModule = (function() {

  function quickSort(arry) {

    if(!Array.isArray(arry)) {
      throw new TypeError('Please give me an array');
    }

    var left = [];
    var right = [];
    var pivot = arry[0];



    for(var i= 1; i < arry.length; i++) {
      if((typeof arry[i] !=='number') || isNaN(arry[i])) {
        throw new TypeError('Please give me an array of numbers');
      }
      if(pivot >=arry[i]) {
        left.push(arry[i]);
        } else if (pivot <= arry[i]) {
        right.push(arry[i]);
        }
      }

    if(arry.length <=1) {
        return arry;
    } else {
        return quickSort(left).concat(pivot, quickSort(right));
    }
  }
  return quickSort;

})();
module.exports = quickSortModule;
