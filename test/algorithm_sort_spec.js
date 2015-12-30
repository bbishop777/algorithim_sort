var chai = require('chai');
chai.should();
var expect = chai.expect;

var bubbleModule  = require('../js/bubble_sort.js');
var quickSortModule = require('../js/quick_sort.js');
var mergeSortModule = require('../js/merge_sort.js');


describe('bubble', function() {
  it('should exist', function() {
    expect(bubbleModule).to.exist;
    expect(bubbleModule).to.be.a('function');
  });

  it('should return a sorted array, if given an unsorted array.', function(){
    var result = bubbleModule([3, 2, 1]);

    expect(result).to.be.a('array');
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should throw an error if argument is not an array', function() {
    var boundFn = bubbleModule.bind(null, 'Hello, there');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubbleModule.bind(null, NaN);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubbleModule.bind(null, 'boolean');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = bubbleModule.bind(null, {});

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

  });

  it('should throw an error if elements of array are not a number', function() {
    var boundFn = bubbleModule.bind(null, [5, 7, "pig", "buggy"]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubbleModule.bind(null, [5, 7, null, null]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubbleModule.bind(null, [5, 7, true, false]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = bubbleModule.bind(null, [5, 7 , {car: 'blue'}]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

  });

});


describe('quickSort', function() {
  it('should exist', function() {
    expect(quickSortModule).to.exist;
    expect(quickSortModule).to.be.a('function');
  });

  it('should return a sorted array, if given an unsorted array.', function(){
    var result = quickSortModule([3, 2, 1]);

    expect(result).to.be.an('array');
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should throw an error if argument is not an array', function() {
    var boundFn = quickSortModule.bind(null, 'Hello, there');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = quickSortModule.bind(null, NaN);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = quickSortModule.bind(null, 'boolean');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = quickSortModule.bind(null, {});

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

  });

  it('should throw an error if elements of array are not a number', function() {
    var boundFn = quickSortModule.bind(null, [5, 7, "pig", "buggy"]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = quickSortModule.bind(null, [5, 7, null, null]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = quickSortModule.bind(null, [5, 7, true, false]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = quickSortModule.bind(null, [5, 7 , {car: 'blue'}]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

  });
});


describe('mergeSort', function() {
  it('should exist', function() {
    expect(mergeSortModule).to.exist;
    expect(mergeSortModule).to.be.a('function');
  });

  it('should return a sorted array, if given an unsorted array.', function(){
    var result = mergeSortModule([3, 2, 1]);

    expect(result).to.be.an('array');
    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should throw an error if argument is not an array', function() {
    var boundFn = mergeSortModule.bind(null, 'Hello, there');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = mergeSortModule.bind(null, NaN);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = mergeSortModule.bind(null, 'boolean');

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

    boundFn = mergeSortModule.bind(null, {});

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array');

  });

  it('should throw an error if elements of array are not a number', function() {
    var boundFn = mergeSortModule.bind(null, [5, 7, "pig", "buggy"]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = mergeSortModule.bind(null, [5, 7, null, null]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = mergeSortModule.bind(null, [5, 7, true, false]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

    boundFn = mergeSortModule.bind(null, [5, 7 , {car: 'blue'}]);

    expect(boundFn).to.throw(TypeError);
    expect(boundFn).to.throw(TypeError, 'Please give me an array of numbers');

  });

});