var chai = require('chai');
chai.should();
var expect = chai.expect;

var bubbleSort  = require('../bubble_sort.js');
var quickSort = require('../quickSort.js');

describe('bubble', function() {
  it('should exist', function() {
    expect(bubbleSort).to.exist;
    expect(bubbleSort).to.be.a('function');
  });

  it('should return a sorted array, if given an unsorted array.', function(){
    var result = bubbleSort.bubble([3, 2, 1]);

    expect(result).to.be.a('array');
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should throw an error if argument is not an array', function() {
    var boundFn = bubbleSort.bind(null, 'Hello, there');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubbleSort.bind(null, NaN);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubbleSort.bind(null, 'boolean');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubbleSort.bind(null, {});

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

  });

  it('should throw an error if elements of array are not a number', function() {
    var boundFn = bubbleSort.bind(null, [5, 7, "pig", "buggy"]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubbleSort.bind(null, [5, 7, null, null]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubbleSort.bind(null, [5, 7, true, false]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubbleSort.bind(null, [5, 7 , {car: 'blue'}]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

  });

});


describe('quickSort', function() {
  it('should exist', function() {
    expect(quickSort).to.exist;
    expect(quickSort).to.be.a('function');
  });

  it('should return a sorted array, if given an unsorted array.', function(){
    var result = quickSort([3, 2, 1]);

    expect(result).to.be.an('array');
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should throw an error if argument is not an array', function() {
    var boundFn = quickSort.bind(null, 'Hello, there');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = quickSort.bind(null, NaN);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = quickSort.bind(null, 'boolean');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = quickSort.bind(null, {});

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

  });

  it('should throw an error if elements of array are not a number', function() {
    var boundFn = quickSort.bind(null, [5, 7, "pig", "buggy"]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = quickSort.bind(null, [5, 7, null, null]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = quickSort.bind(null, [5, 7, true, false]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = quickSort.bind(null, [5, 7 , {car: 'blue'}]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

  });

});