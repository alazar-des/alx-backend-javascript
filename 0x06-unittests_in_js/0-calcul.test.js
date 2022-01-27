const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should be 1 + 5 = 6', function () {
    assert.equal(calculateNumber(1, 5), 6);
  });
  it('should be -1 + 5 = 4', function () {
    assert.equal(calculateNumber(-1, 5), 4);
  });
  it('should be 1.3 + -5.7 = -5', function () {
    assert.equal(calculateNumber(1.3, -5.7), -5);
  });
  it('should be -1.8 + -5.1 = -7', function () {
    assert.equal(calculateNumber(-1.8, -5.1), -7);
  });
});
