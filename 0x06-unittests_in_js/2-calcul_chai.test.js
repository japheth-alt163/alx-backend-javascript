const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should round and sum two numbers', function() {
            const result = calculateNumber('SUM', 1.4, 4.5);
            expect(result).to.equal(6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should round and subtract second number from first number', function() {
            const result = calculateNumber('SUBTRACT', 1.4, 4.5);
            expect(result).to.equal(-4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should round and divide first number by second number', function() {
            const result = calculateNumber('DIVIDE', 1.4, 4.5);
            expect(result).to.equal(0.2);
        });

        it('should return Error when trying to divide by rounded zero', function() {
            const result = calculateNumber('DIVIDE', 1.4, 0);
            expect(result).to.equal('Error');
        });
    });

    describe('Unsupported operation', function() {
        it('should throw an error for unsupported operation type', function() {
            expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(Error);
        });
    });
});

