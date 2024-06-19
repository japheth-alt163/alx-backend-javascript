const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with SUM type and log the result', function() {
        // Create a spy for Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with expected arguments
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

        // Restore the spy
        calculateNumberSpy.restore();
    });

    // Add more test cases as needed
});
