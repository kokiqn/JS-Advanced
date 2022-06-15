const sum = require('../04.sum-of-numbers');
const assert = require('chai').assert;

describe('Test functionallity of sum', () => {
    it('Should pass when adding numbers', () => {
        let input = [-1, 2, -4, 5, 6];
        let expectedResult = 8;

        let actualResult = sum(input);
        assert.equal(expectedResult, actualResult);
    });

    it('Should not pass when result does not match', () => {
        let input = [1, 2, 4, 5, 6];
        let expectedResult = 5;

        let actualResult = sum(input);
        assert.notEqual(expectedResult, actualResult);
    });

    it('Should return 0 if the array is empty', () => {
        let input = [];
        let expectedResult = 0;

        let actualResult = sum(input);
        assert.equal(expectedResult, actualResult);
    });
});
