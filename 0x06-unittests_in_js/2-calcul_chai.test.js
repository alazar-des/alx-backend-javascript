const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('sum', function () {
    it('should be 1 + 5 = 6', function () {
      expect(calculateNumber('SUM', 1, 5)).equal(6);
    });
    it('should be -1 + 5 = 4', function () {
      expect(calculateNumber('SUM', -1, 5)).equal(4);
    });
    it('should be 1.3 + -5.7 = -5', function () {
      expect(calculateNumber('SUM', 1.3, -5.7)).equal(-5);
    });
    it('should be -1.8 + -5.1 = -7', function () {
      expect(calculateNumber('SUM', -1.8, -5.1)).equal(-7);
    });
  });
  describe('subtract', function () {
    it('should be 1 - 5 = -4', function () {
      expect(calculateNumber('SUBTRACT', 1, 5)).equal(-4);
    });
    it('should be -1 - 5 = -6', function () {
      expect(calculateNumber('SUBTRACT', -1, 5)).equal(-6);
    });
    it('should be 1.3 - -5.7 = 7', function () {
      expect(calculateNumber('SUBTRACT', 1.3, -5.7)).equal(7);
    });
    it('should be -1.8 - -5.1 = 3', function () {
      expect(calculateNumber('SUBTRACT', -1.8, -5.1)).equal(3);
    });
  });
  describe('divide', function () {
    it('should be 1 / 5 = 0.2', function () {
      expect(calculateNumber('DIVIDE', 1, 5)).equal(0.2);
    });
    it('should be -1 / 5 = -0.2', function () {
      expect(calculateNumber('DIVIDE', -1, 5)).equal(-0.2);
    });
    it('should be 1.3 / -4.7 = -5', function () {
      expect(calculateNumber('DIVIDE', 1.3, -4.7)).equal(-0.2);
    });
    it('should be -1.8 / -5.1 = -7', function () {
      expect(calculateNumber('DIVIDE', -1.8, -5.1)).equal(0.4);
    });
    it('should be -1.8 / -5.1 = -7', function () {
      expect(calculateNumber('DIVIDE', -1.8, 0)).equal('Error');
    });
  });
});
