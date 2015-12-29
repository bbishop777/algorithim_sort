module.exports = (function() {
  function quickSort(arry) {
    var left = [];
    var right = [];
    var pivot = arry[0];



    for(var i= 1; i < arry.length; i++) {
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
