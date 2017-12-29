const expect = require('chai').expect;
const longestCommonPrefix = require('../longest_prefix1.js');

describe('A basic test', () => {
  it('Should match from input args and output the longest prefix match or ""', () => {
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

/*
["a"] or ["c", "c"] or ["abca", "abc"]   [""] = ""    ["a"]
// ["a","a","b"]      ["ab","abc","ab"]     ["aa","ab"]
// ["flower","flow","flight"]
// ["ca","a"]   exp  ""
// ["c", "c"]   exp  "c"
// "abca","aba","aaab"

describe('A basic test2', () => {
  it('Should pass when this 300 is OK', () => {
    expect(somevar3).to.equal(300);
  });
  it('Should pass when this 400 is OK', () => {
    expect(somevar4).to.equal(400);
  });
});

*/
