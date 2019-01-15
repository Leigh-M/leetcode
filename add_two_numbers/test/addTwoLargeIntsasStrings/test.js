const expect = require('chai').expect;
const mocha = require('mocha');

const sumStrings = require('./addTwoLargeIntegersasStrings.js');

describe('sumStrings()', function() {
  const tests = [
    {args: ['22', '37'], expected: '59'},
    {args: ['4999999999888888887777777', '6999999999888888887777777'], expected: '11999999999777777775555554'}
  ];
  tests.forEach(function(test) {
    it(`correctly sums ${test.args}`, function() {
      const res = sumStrings(...test.args);
      expect(res).to.equal(test.expected);
    });
  });
});
