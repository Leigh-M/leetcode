const expect = require('chai').expect;
const isPalindrome = require('./palin.js');

describe('isPalindrome()', function() {
  const tests = [
    {args: [0], expected: true },
    {args: [6], expected: true },
    {args: [101], expected: true },
    {args: [99], expected: true },
    {args: [98], expected: false },
    {args: [2002], expected: true },
    {args: [4004], expected: true },
    {args: [2002], expected: true },
    {args: [2002], expected: true },

  ];
  tests.forEach(function(test) {
    it(`correctly checks ${test.args} ia a Palindrome`, function() {
      const res = isPalindrome(test.args);
      expect(res).to.equal(test.expected);
    });
  });
});
