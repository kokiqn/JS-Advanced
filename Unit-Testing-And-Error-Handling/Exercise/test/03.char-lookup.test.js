const lookupChar = require('../03.char-lookup');
const { assert } = require('chai');

describe('Test functionallity of lookupChar', () => {
    it('returns undefined if incorrect parameter is provided', () => {
        assert.isUndefined(lookupChar(1, 2));
        assert.isUndefined(lookupChar({}, 2));
        assert.isUndefined(lookupChar([], 2));
        assert.isUndefined(lookupChar(undefined, 2));
        assert.isUndefined(lookupChar(null, 2));
        assert.isUndefined(lookupChar('string', []));
        assert.isUndefined(lookupChar('string', {}));
        assert.isUndefined(lookupChar('string', 'string'));
        assert.isUndefined(lookupChar('string', true));
        assert.isUndefined(lookupChar('string', undefined));
        assert.isUndefined(lookupChar('string', null));
        assert.isUndefined(lookupChar('test', 2.3));
    });

    it('does not work if the provided index is incorrect', () => {
        assert.equal(lookupChar('test', -1), 'Incorrect index');
        assert.equal(lookupChar('test', 4), 'Incorrect index');
    });

    it('returns char at specified index', () => {
        assert.equal(lookupChar('cat', 0), 'c');
        assert.equal(lookupChar('dog', 2), 'g');
        assert.equal(lookupChar('helicopter', 8), 'e');
    });
});
