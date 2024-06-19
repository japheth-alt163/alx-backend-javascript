const assert = require("assert");
const { describe, it } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it("should round and sum two integers", function() {
        const res = calculateNumber(1, 2);
        assert.strictEqual(res, 3);
    });

    it("should round and sum mixed numbers", function() {
        const res = calculateNumber(1.4, 2.2);
        assert.strictEqual(res, 3);
    });

    it("should round and sum floating point numbers", function() {
        const res = calculateNumber(1.6, 2.7);
        assert.strictEqual(res, 5);
    });

    it("should handle zero inputs correctly", function() {
        const res = calculateNumber(0, 0);
        assert.strictEqual(res, 0);
    });

    it("should correctly round and sum negative numbers", function() {
        const res = calculateNumber(-1.6, -1.7);
        assert.strictEqual(res, -4);
    });

    it("should handle another case of negative numbers", function() {
        const res = calculateNumber(-1.4, -1.3);
        assert.strictEqual(res, -2);
    });

});
