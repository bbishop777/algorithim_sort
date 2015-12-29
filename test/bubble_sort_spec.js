var chai = require('chai');
chai.should();
var expect = chai.expect;

var bubble  = require('../bubble_sort.js');

describe('bubble', function() {
  it('should exist', function() {
    expect(bubble).to.exist;
    expect(bubble).to.be.a('function');
  });

  it('should return a sorted array, if given an unsorted array.', function(){
    var result = bubble([3, 2, 1]);

    expect(result).to.be.a('array');
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should throw an error if argument is not an array', function() {
    var boundFn = bubble.bind(null, 'Hello, there');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubble.bind(null, NaN);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubble.bind(null, 'boolean');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubble.bind(null, {});

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

  });

  it('should throw an error if elements of array are not a number', function() {
    var boundFn = bubble.bind(null, [5, 7, "pig", "buggy"]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubble.bind(null, [5, 7, null, null]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubble.bind(null, [5, 7, true, false]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubble.bind(null, [5, 7 , {car: 'blue'}]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

  });

});