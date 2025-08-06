
const { add } = require('../utills/moths.util');

describe('Maths Utility functions -> add',() => {
    test('add two numbers -> ', ()=> {
        expect(add(2,3)).toBe(5);
        expect(add(0,9)).toBe(9);
        expect(add(-1,1)).toBe(0);
    })
})