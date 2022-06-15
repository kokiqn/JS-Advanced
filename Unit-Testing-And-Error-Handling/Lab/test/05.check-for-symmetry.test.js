const isSymmetric = require('../05.check-for-symmetry');
const { assert } = require('chai');

describe('Test functionallity of isSymmetric', () => {
    it('returns false if invalid argument is provided', () => {
        assert.isFalse(isSymmetric({}));
        assert.isFalse(isSymmetric('s'));
        assert.isFalse(isSymmetric(0));
        assert.isFalse(isSymmetric(undefined));
        assert.isFalse(isSymmetric(null));
    });

    it('returns true if valid input is symmetric', () => {
        assert.isTrue(isSymmetric([1, 2, 1]));
    });

    it('returns false if valid input is non-symmetric', () => {
        assert.isFalse(isSymmetric([1, 2]));
    });

    it('returns false for type-coerced elements', () => {
        assert.isFalse(isSymmetric([1, '1']));
    });

    it('returns true if array has only one element', () => {
        assert.isTrue(isSymmetric([1]));
    })
});
