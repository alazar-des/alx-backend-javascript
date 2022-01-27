const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('AGI', function () {
  describe('Index page', function () {
    it('should return status code of 200', function () {
      request.get('http://localhost:7865', function (error, response, body) {
        expect(response.statusCode).to.be.equal(200);
      });
    });
    it('should return a body Welcome to the payment system', function () {
      request.get('http://localhost:7865', function (error, response, body) {
        expect(body).to.be.equal('Welcome to the payment system');
      });
    });
  });

  describe('Cart Page', function () {
    it('should return status code of 200', function () {
      request.get('http://localhost:7865/cart/12', function (error, response, body) {
        expect(response.statusCode).to.be.equal(200);
      });
    });
    it('should return a body Welcome to the payment system', function () {
      request.get('http://localhost:7865/cart/12', function (error, response, body) {
        expect(body).to.be.equal('Payment methods for cart 12');
      });
    });
    it('should return status code of 404', function () {
      request.get('http://localhost:7865/cart/TR', function (error, response, body) {
        expect(response.statusCode).to.be.equal(404);
      });
    });
  });
});
