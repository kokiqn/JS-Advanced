const createCalculator = require('../07.add-subtract');
const { assert } = require('chai');

describe('Test functionallity of createCalculator', () => {
    it('returns an object', () => {
        assert.isObject(createCalculator());
    });

    it('returns an object containing the functions as properties', () => {
        assert.isTrue(createCalculator().hasOwnProperty('add'));
        assert.isTrue(createCalculator().hasOwnProperty('subtract'));
        assert.isTrue(createCalculator().hasOwnProperty('get'));
    });

    it('should have internal sum that can not be modified from the outside', () => {
        let calculator = createCalculator();
        let value = calculator.get();
        value = 1;

        assert.notEqual(calculator.get(), 1);
    });

    it('adds parameter of type Number to sum', () => {
        let calculator = createCalculator();
        calculator.add(1);
        assert.equal(calculator.get(), 1);
    });

    it('adds parameter of type String containing a number', () => {
        let calculator = createCalculator();
        calculator.add('1');
        assert.equal(calculator.get(), 1);
    });

    it('subtracts parameter of type Number from sum', () => {
        let calculator = createCalculator();
        calculator.subtract(1);
        assert.equal(calculator.get(), -1);
    });

    it('subtracts parameter of type String containing a number', () => {
        let calculator = createCalculator();
        calculator.subtract('1');
        assert.equal(calculator.get(), -1);
    });

    it('add and subtract methods work together', () => {
        let calculator = createCalculator();
        calculator.add(2);
        calculator.subtract(1);
        assert.equal(calculator.get(), 1);
    });

    it('returns NaN if invalid argument is provided', () => {
        let calculator = createCalculator();
        calculator.add('string');
        assert.isNaN(calculator.get());
    });

    it('get method returns correct value', () => {
        let calculator = createCalculator();
        let value = calculator.get();

        assert.equal(value, 0);
    });
});
