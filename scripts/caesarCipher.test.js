const caesarCipher = require('./caesarCipher');

describe('CaesarCipher function', () => {
    test('works with a single letter', () => {
        expect(caesarCipher('A', 1)).toBe('B');
    });

    test('works with multiple letters and words', () => {
        expect(caesarCipher('Aaa', 1)).toBe('Bbb');
    });

    test('works with phrases, sentences including punctuation', () => {
        expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
    });

    test('works with negative shift', () => {
        expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
    });

    test('wraps around the alphabet ', () => {
        expect(caesarCipher('Z', 1)).toBe('A');
    });

    test('works with large shift factors', () => {
        expect(caesarCipher('Hello, World!', 75)).toBe('Ebiil, Tloia!');
    });

    test('works with large negative shift factors', () => {
        expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
    });
});
