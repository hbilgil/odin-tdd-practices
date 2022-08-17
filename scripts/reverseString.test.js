const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses strings with a single word', () => {
    expect(reverseString('halil')).toEqual('lilah');
  });

  test('reverses strings with multiple words', () => {
    expect(reverseString('halil bilgil')).toEqual('liglib lilah')
  })

  test('reverses strings includes numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })

  test('reverses blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});