const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
    it('should stub Utils.calculateNumber and log the correct message', function() {
        // Create a stub for Utils.calculateNumber
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Create a spy to listen on console.log
        const consoleSpy = sinon.spy(console, 'log');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with expected arguments
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

        // Assert that console.log was called with the correct message
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;

        // Restore the stub and spy
        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
