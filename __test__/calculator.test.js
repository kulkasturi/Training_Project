const {calculateTotal} = require('../utills/calculate.utils');

describe('Calculate Utility functions -> calculateTotal', () => {
    test('calculate total with valid inputs', () => {
        expect(calculateTotal(100, 10)).toBe(90);
        expect(calculateTotal(200, 20)).toBe(160);
    })

    test('throw error for negative price', () => {
        expect(() => calculateTotal(-100, 10)).toThrow("Price and discount percentage must be non-negative");
        expect(() => calculateTotal(100, -10)).toThrow("Price and discount percentage must be non-negative");
    })

});