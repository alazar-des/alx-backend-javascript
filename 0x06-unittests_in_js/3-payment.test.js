const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber', function () {
    Utils.calculateNumber = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 200);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
  it("should call Utils.calculateNumber with ('SUM', 100, 200)", function () {
    expect(Utils.calculateNumber.calledWith('SUM', 100, 200)).to.be.true;
  });
});
