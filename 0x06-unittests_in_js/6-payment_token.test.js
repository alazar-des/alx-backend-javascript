const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it("should return {data: 'Successful response from the API' }", function (done) {
    getPaymentTokenFromAPI(true)
      .then((resp) => {
        expect(resp.data).to.be.equal('Successful response from the API');
        done();
      });
  });
});
