const isOddOrEven = require('../02.ever-or-odd');
const { assert } = require('chai');

describe('Test functionallity of isOddOrEven', () => {
    it('returns undefined if passed parameter is not a string', () => {
        assert.isUndefined(isOddOrEven(1));
        assert.isUndefined(isOddOrEven({}));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven(NaN));
    });

    it('returns even or odd according to the length of the string', () => {
        assert.equal(isOddOrEven('even'), 'even');
        assert.equal(isOddOrEven('odd'), 'odd');
        assert.equal(isOddOrEven('no'), 'even');
        assert.equal(isOddOrEven('yes'), 'odd');
    });

    it('should not return incorrect output', () => {
        assert.notEqual(isOddOrEven('cat', 'even'));
        assert.notEqual(isOddOrEven('mice', 'odd'));
    });
});
