const chai = require('chai');
const expect = chai.expect;

const assert = require('assert');

const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToAPI', function () {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });
  afterEach(function () {
    console.log.restore();
  });
  it("should call Utils.calculateNumber with ('SUM', 100, 20)", function () {
    sendPaymentRequestToApi(100, 20);

    assert(console.log.calledWith('The total is: 120'));
    expect(console.log.calledOnce).to.be.true;
  });
  it("should call Utils.calculateNumber with ('SUM', 10, 10)", function () {
    sendPaymentRequestToApi(10, 10);

    assert(console.log.calledWith('The total is: 20'));
    expect(console.log.calledOnce).to.be.true;
  });
});
