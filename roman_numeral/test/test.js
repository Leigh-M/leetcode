const expect = require('chai').expect;
const romanToInt = require('./roman_numeral.js');

describe('romanToInt()', function() {
  const tests = [
    {args: ['X'], expected: 10 },
    {args: ['XXXIV'], expected: 34 },
    {args: ['MMDCCC'], expected: 2800 },
    {args: ['III'], expected: 3 },
    {args: ['LXXXIX'], expected: 89 }
  ];
  tests.forEach(function(test) {
    it(`Correctly returns base 10 version of Roman Numeral ${test.args}`, function() {
      const res = romanToInt(test.args);
      expect(res).to.equal(test.expected);
    });
  });
});
