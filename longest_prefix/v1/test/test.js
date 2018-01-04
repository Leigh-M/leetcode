const expect = require('chai').expect;
const longestCommonPrefix = require('./longest_prefix.js');

describe('longestCommonPrefix()', function() {
  const tests = [
    {args: ["a", "a"], expected: "a" },
    {args: ["abca", "abc"], expected: "abc" },
    {args: ["a"], expected: "a" },
    {args: ["a", "a", "b"], expected: "" },
    {args: ["ab", "abc", "ab"], expected: "ab" },
    {args: ["flower", "flow", "flight"], expected: "fl" },
    {args: ["ca", "a"], expected: "" },
    {args: ["abca", "aba", "aaab"], expected: "a" }
  ];

  tests.forEach(function(test) {
    it(`correctly checks ${test.args} for the longest matching common prefix`, function() {
      const res = longestCommonPrefix(...[test.args]);
      expect(res).to.equal(test.expected);
    });
  });
});
