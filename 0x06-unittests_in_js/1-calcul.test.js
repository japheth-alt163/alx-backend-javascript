const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should round and sum two numbers', function() {
            const result = calculateNumber('SUM', 1.4, 4.5);
            assert.strictEqual(result, 6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should round and subtract second number from first number', function() {
            const result = calculateNumber('SUBTRACT', 1.4, 4.5);
            assert.strictEqual(result, -4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should round and divide first number by second number', function() {
            const result = calculateNumber('DIVIDE', 1.4, 4.5);
            assert.strictEqual(result, 0.2);
        });

        it('should return Error when trying to divide by rounded zero', function() {
            const result = calculateNumber('DIVIDE', 1.4, 0);
            assert.strictEqual(result, 'Error');
        });
    });

    describe('Unsupported operation', function() {
        it('should throw an error for unsupported operation type', function() {
            assert.throws(() => calculateNumber('MULTIPLY', 1, 2), Error);
        });
    });
});
