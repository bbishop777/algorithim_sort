"use strict";
var mergeSortModule = (function() {


  function mergeSort(arry) {
    var len = arry.length;
    var left = [];
    var right = [];

    if(!Array.isArray(arry)) {
      throw new TypeError('Please give me an array');
    }


    if(len >= 2) {
      var mid = (Math.floor(len/2))-1;
      for(var x=0; x<len; x++) {

      if((typeof arry[x] !=='number') || isNaN(arry[x])) {
        throw new TypeError('Please give me an array of numbers');
      }

        if(x <= mid) {
          left.push(arry[x]);
        } else {
          right.push(arry[x]);
        }
      }
      var leftArry =mergeSort(left);
      var rightArry = mergeSort(right);

      return theSort(leftArry, rightArry);


    }
    else {
      return arry;
    }
  }

  function theSort (leftArry, rightArry) {
    var newArry= [];
    while((leftArry.length > 0) && (rightArry.length > 0)) {

      if(leftArry[0] < rightArry[0]) {
        newArry.push(leftArry.shift());
      } else if(leftArry[0] > rightArry[0]) {
        newArry.push(rightArry.shift());
      }

    }
    if((leftArry.length === 0) && (rightArry.length > 0)) {
      return newArry.concat(rightArry);
    } else {
      return newArry.concat(leftArry);
    }



  }
  return mergeSort;
})();
module.exports = mergeSortModule;