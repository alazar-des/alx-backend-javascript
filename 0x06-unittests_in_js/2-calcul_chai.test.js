const chai = require("chai");
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  describe('sum', function () {
    it('should be 1 + 5 = 6', function () {
      expect(calculateNumber('SUM', 1, 5)).to.equal(6);
    });
    it('should be -1 + 5 = 4', function () {
      expect(calculateNumber('SUM', -1, 5)).to.equal(4);
    });
    it('should be 1.3 + -5.7 = -5', function () {
      expect(calculateNumber('SUM', 1.3, -5.7)).to.equal(-5);
    });
    it('should be -1.8 + -5.1 = -7', function () {
      expect(calculateNumber('SUM', -1.8, -5.1)).to.equal(-7);
    });
  });
  describe('subtract', function () {
    it('should be 1 - 5 = -4', function () {
      expect(calculateNumber('SUBTRACT', 1, 5)).to.equal(-4);
    });
    it('should be -1 - 5 = -6', function () {
      expect(calculateNumber('SUBTRACT', -1, 5)).to.equal(-6);
    });
    it('should be 1.3 - -5.7 = 7', function () {
      expect(calculateNumber('SUBTRACT', 1.3, -5.7)).to.equal(7);
    });
    it('should be -1.8 - -5.1 = 3', function () {
      expect(calculateNumber('SUBTRACT', -1.8, -5.1)).to.equal(3);
    });
  });
  describe('divide', function () {
    it('should be 1 / 5 = 0.2', function () {
      expect(calculateNumber('DIVIDE', 1, 5)).to.equal(0.2);
    });
    it('should be -1 / 5 = -0.2', function () {
      expect(calculateNumber('DIVIDE', -1, 5)).to.equal(-0.2);
    });
    it('should be 1.3 / -4.7 = -5', function () {
      expect(calculateNumber('DIVIDE', 1.3, -4.7)).to.equal(-0.2);
    });
    it('should be -1.8 / -5.1 = -7', function () {
      expect(calculateNumber('DIVIDE', -1.8, -5.1)).to.equal(0.4);
    });
    it('should be -1.8 / -5.1 = -7', function () {
      expect(calculateNumber('DIVIDE', -1.8, 0)).to.equal('Error');
    });
  });
});
