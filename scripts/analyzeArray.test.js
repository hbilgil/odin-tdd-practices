const analyzeArray = require('./analyzeArray');

describe('analyzeArray function', () => {
    test('works with arrays include only number items', () => {
        expect(analyzeArray([9, 4, 7, 3, 1, 6, 8, 10, 2, 5])).toEqual({
            average: 5.5,
            min: 1,
            max: 10,
            length: 10,
        });
    });
  
    test('works with arrays include non-number items', () => {
        expect(analyzeArray([9, 4, 7, 3, 1, '6', 8, '10', 2, '5'])).toBe('Not an array');
    });
  
    test('works with array-like strings', () => {
        expect(analyzeArray('12345')).toBe('Not an array');
    });
});