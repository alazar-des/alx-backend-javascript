const chai = require('chai');
const expect = chai.expect;

const assert = require('assert');

const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function () {
  it("should call Utils.calculateNumber with ('SUM', 100, 200)", function () {
    const calculateNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 200);

    expect(calculateNumStub.calledWith('SUM', 100, 200)).to.be.true;
  });
  it('console.log should log: The total is: 10', function () {
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 200);
    assert(consoleLogSpy.calledWith('The total is: 10'));
  });
});
