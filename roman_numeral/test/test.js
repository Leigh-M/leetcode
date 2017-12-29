const expect = require('chai').expect;
const romanToInt = require('../roman_numeral.js');

// romanToInt('X');

describe('A basic test', function () {
  it('Should give int value of the Roman Numeral', function () {
    expect(romanToInt('X')).to.equal(10);
  });
});
