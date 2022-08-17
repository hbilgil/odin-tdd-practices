const capitalizeFirstLetter = require('./capitalize');

describe('capitalizeFirstLetter', () => {
  test('makes the first letter of a  totally lower cased string capital', () => {
    expect(capitalizeFirstLetter('hey')).toEqual('Hey');
  });
  test('makes the first letter of a  string with just a lower cased first letter capital', () => {
    expect(capitalizeFirstLetter('gALATASARAY')).toEqual('Galatasaray');
  });
  test('makes the first letter of a  string with mixed lower and upper cased letters capital', () => {
    expect(capitalizeFirstLetter('eSkIsEHIrlilER')).toEqual('Eskisehirliler');
  });
  test('makes the first letter of a  string with fully upper cased letters capital', () => {
    expect(capitalizeFirstLetter('ANKARASPOR')).toEqual('Ankaraspor');
  });
  test('works with blank strings, too', () => {
    expect(capitalizeFirstLetter('')).toEqual('');
  });
});