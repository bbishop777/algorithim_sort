module.exports = (function() {

  function bubble(arry) {

    if(!Array.isArray(arry)) {
      throw new TypeError('Please give me an array');
    }
    var len = arry.length;
    var count = 0;

    for(x=0; x<arry.length; x++) {

      if((typeof arry[x] !=='number') || isNaN(arry[x])) {
        throw new TypeError('Please give me an array of numbers');
      }

      if(arry[x+1]!==undefined) {

        if(arry[x] > arry[x+1]) {
          var first = arry[x];
          var second = arry[x+1];

          arry[x]= second;
          arry[x+1]= first;
          count = count + 1;
        }
      }

      else if((arry[x+1]===undefined) && count>0) {
        return bubble(arry);
      }

      else if((arry[x+1]===undefined) && count===0) {
        return arry;
      }
    }
  }

  return bubble;
})();