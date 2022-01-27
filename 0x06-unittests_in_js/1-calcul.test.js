const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('sum', function () {
    it('should be 1 + 5 = 6', function () {
      assert.equal(calculateNumber('SUM', 1, 5), 6);
    });
    it('should be -1 + 5 = 4', function () {
      assert.equal(calculateNumber('SUM', -1, 5), 4);
    });
    it('should be 1.3 + -5.7 = -5', function () {
      assert.equal(calculateNumber('SUM', 1.3, -5.7), -5);
    });
    it('should be -1.8 + -5.1 = -7', function () {
      assert.equal(calculateNumber('SUM', -1.8, -5.1), -7);
    });
  });
  describe('subtract', function () {
    it('should be 1 - 5 = -4', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 5), -4);
    });
    it('should be -1 - 5 = -6', function () {
      assert.equal(calculateNumber('SUBTRACT', -1, 5), -6);
    });
    it('should be 1.3 - -5.7 = 7', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.3, -5.7), 7);
    });
    it('should be -1.8 - -5.1 = 3', function () {
      assert.equal(calculateNumber('SUBTRACT', -1.8, -5.1), 3);
    });
  });
  describe('divide', function () {
    it('should be 1 / 5 = 0.2', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 5), 0.2);
    });
    it('should be -1 / 5 = -0.2', function () {
      assert.equal(calculateNumber('DIVIDE', -1, 5), -0.2);
    });
    it('should be 1.3 / -4.7 = -5', function () {
      assert.equal(calculateNumber('DIVIDE', 1.3, -4.7), -0.2);
    });
    it('should be -1.8 / -5.1 = -7', function () {
      assert.equal(calculateNumber('DIVIDE', -1.8, -5.1), 0.4);
    });
    it('should be -1.8 / -5.1 = -7', function () {
      assert.equal(calculateNumber('DIVIDE', -1.8, 0), 'Error');
    });
  });
});
