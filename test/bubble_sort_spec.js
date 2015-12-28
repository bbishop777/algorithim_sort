var chai = require('chai');
chai.should();
var expect = chai.expect;

var bubble  = require('../bubble_sort.js');

describe('bubble', function() {
  it('should exist', function() {
    expect(bubble).to.exist;
    expect(bubble).to.be.a('function');
  });



});