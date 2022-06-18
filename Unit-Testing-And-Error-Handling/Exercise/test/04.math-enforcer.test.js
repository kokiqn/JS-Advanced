const mathEnforcer = require('../04.math-enforcer');
const { assert } = require('chai');

describe('test mathEnforcer', () => {
    describe('test addFive method', () => {
        it('should return undefined if parameter is invalid', () => {
            assert.isUndefined(mathEnforcer.addFive([]));
            assert.isUndefined(mathEnforcer.addFive({}));
            assert.isUndefined(mathEnforcer.addFive());
            assert.isUndefined(mathEnforcer.addFive(null));
            assert.isUndefined(mathEnforcer.addFive('num'));
            assert.isUndefined(mathEnforcer.addFive(false));
        });

        it('should return the correct result with positive parameter', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(20000), 20005);
        });

        it('should return the correct result with negative parameter', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(-3), 2);
            assert.equal(mathEnforcer.addFive(-20000), -19995);
        });

        it('should return the correct result with floating-point parameter', () => {
            assert.closeTo(mathEnforcer.addFive(4.923), 9.923, 0.001);
            assert.closeTo(mathEnforcer.addFive(3.3333333), 8.3333333, 0.001);
            assert.closeTo(mathEnforcer.addFive(-10.98762), -5.98762, 0.001);
        });
    });

    describe('test subtractTen method', () => {
        it('should return undefined if parameter is invalid', () => {
            assert.isUndefined(mathEnforcer.subtractTen([]));
            assert.isUndefined(mathEnforcer.subtractTen({}));
            assert.isUndefined(mathEnforcer.subtractTen());
            assert.isUndefined(mathEnforcer.subtractTen(null));
            assert.isUndefined(mathEnforcer.subtractTen('num'));
            assert.isUndefined(mathEnforcer.subtractTen(false));
        });

        it('should return the correct result with positive parameter', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20000), 19990);
        });

        it('should return the correct result with negative parameter', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.equal(mathEnforcer.subtractTen(-3), -13);
            assert.equal(mathEnforcer.subtractTen(-20000), -20010);
        });

        it('should return the correct result with floating-point parameter', () => {
            assert.closeTo(mathEnforcer.subtractTen(4.923), -5.077, 0.001);
            assert.closeTo(mathEnforcer.subtractTen(3.3333333), -6.666666, 0.001);
            assert.closeTo(mathEnforcer.subtractTen(-10.98762), -20.98762, 0.001);
        });
    });

    describe('test sum method', () => {
        it('should return undefined if one or both parameters is invalid', () => {
            assert.isUndefined(mathEnforcer.sum([], 5));
            assert.isUndefined(mathEnforcer.sum(5, {}));
            assert.isUndefined(mathEnforcer.sum(5));
            assert.isUndefined(mathEnforcer.sum());
            assert.isUndefined(mathEnforcer.sum(null, 5));
            assert.isUndefined(mathEnforcer.sum('num', 5));
            assert.isUndefined(mathEnforcer.sum(5, false));
        });

        it('should return the correct result with positive and negative parameters', () => {
            assert.equal(mathEnforcer.sum(5, -10), -5);
            assert.equal(mathEnforcer.sum(10, 5), 15);
            assert.equal(mathEnforcer.sum(0, -10), -10);
            assert.equal(mathEnforcer.sum(-5, -10), -15);
            assert.equal(mathEnforcer.sum(1405, 2595), 4000);
        });

        it('should return the correct result with floating-point parameter', () => {
            assert.closeTo(mathEnforcer.sum(6.753, 8.627), 15.38, 0.001);
            assert.closeTo(mathEnforcer.sum(4.923, -5.077), -0.154, 0.001);
            assert.closeTo(mathEnforcer.sum(3.3333333, -6.666666), -3.33334, 0.001);
            assert.closeTo(mathEnforcer.sum(-10.98762, 10.98762), 0, 0.001);
        });
    });
});
