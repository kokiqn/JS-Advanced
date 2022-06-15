const rgbToHexColor = require('../06.rgb-to-hex');
const { assert } = require('chai');

describe('Test functionallity of rgbToHexColor', () => {
    it('returns undefined for invalid input', () => {
        assert.isUndefined(rgbToHexColor(43, 'no', 2));
        assert.isUndefined(rgbToHexColor('string'));
        assert.isUndefined(rgbToHexColor(['32', '43', '64']));
    });

    it('returns undefined for negative values', () => {
        assert.isUndefined(rgbToHexColor(-1, 0, 0));
        assert.isUndefined(rgbToHexColor(0, -1, 0));
        assert.isUndefined(rgbToHexColor(0, 0, -1));

    });

    it('returns undefined for values > 255', () => {
        assert.isUndefined(rgbToHexColor(256, 0, 0));
        assert.isUndefined(rgbToHexColor(0, 256, 0));
        assert.isUndefined(rgbToHexColor(0, 0, 256));

    });

    it('converts white to hex', () => assert.equal('#FFFFFF', rgbToHexColor(255, 255, 255)));

    it('converts black to hex', () => assert.equal('#000000', rgbToHexColor(0, 0, 0)));

    it('converts red to hex', () => assert.equal('#FF0000', rgbToHexColor(255, 0, 0)));

    it('converts green to hex', () => assert.equal('#00FF00', rgbToHexColor(0, 255, 0)));

    it('converts blue to hex', () => assert.equal('#0000FF', rgbToHexColor(0, 0, 255)));

    it('converts (243, 78, 47) to hex', () => assert.equal('#F34E2F', rgbToHexColor(243, 78, 47)));

    it('converts (42, 173, 170) to hex', () => assert.equal('#2AADAA', rgbToHexColor(42, 173, 170)));
});
