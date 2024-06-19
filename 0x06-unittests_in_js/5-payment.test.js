const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;

    // Set up the spy before each test
    beforeEach(function() {
        consoleSpy = sinon.spy(console, 'log');
    });

    // Clean up the spy after each test
    afterEach(function() {
        consoleSpy.restore();
    });

    it('should log the correct message and call console.log once for 100 and 20', function() {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
    });

    it('should log the correct message and call console.log once for 10 and 10', function() {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
    });
});
