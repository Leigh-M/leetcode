const expect = require('chai').expect;
const longestCommonPrefix = require('./longest_prefix.js');

describe('Test harness', function () {
  it('Should match from input args and output the longest prefix match or "" if no match', function () {
    expect(longestCommonPrefix(["a", "a"])).to.equal("a");
    expect(longestCommonPrefix(["abca", "abc"])).to.equal("abc");
    expect(longestCommonPrefix([""])).to.equal("");
    expect(longestCommonPrefix(["a"])).to.equal("a");
    expect(longestCommonPrefix(["a", "a", "b"])).to.equal("");
    expect(longestCommonPrefix(["ab", "abc", "ab"])).to.equal("ab");
    expect(longestCommonPrefix(["flower", "flow", "flight"])).to.equal("fl");
    expect(longestCommonPrefix(["ca", "a"])).to.equal("");
    expect(longestCommonPrefix(["abca", "aba", "aaab"])).to.equal("a");
  });
});
