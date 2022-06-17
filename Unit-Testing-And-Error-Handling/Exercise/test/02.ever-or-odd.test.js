const isOddOrEven = require('../02.ever-or-odd');
const { assert } = require('chai');

describe('Test functionallity of isOddOrEven', () => {
    it('returns undefined if passed parameter is not a string', () => {
        assert.isUndefined(isOddOrEven(1));
        assert.isUndefined(isOddOrEven({}));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven(NaN));
    });

    it('returns even if length is an even number', () => {
        assert.equal(isOddOrEven('even'), 'even');
        assert.equal(isOddOrEven('eleven'), 'even');
        assert.equal(isOddOrEven('no'), 'even');
    });

    it('returns odd if length is an odd number', () => {
        assert.equal(isOddOrEven('odd'), 'odd');
        assert.equal(isOddOrEven('seven'), 'odd');
        assert.equal(isOddOrEven('yes'), 'odd');
    });
});
