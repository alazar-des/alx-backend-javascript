const request = require('request');
const chai = require('chai');
const expect = chai.expect;

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
