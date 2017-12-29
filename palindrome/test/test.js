const expect = require('chai').expect;
const isPalindrome = require('../palin.js');

describe('A basic test', () => {
  it('Should return true if input int is palindrome, false if not', function () {
    expect(isPalindrome(2002)).to.be.true;
    expect(isPalindrome(4004)).to.be.true;
    expect(isPalindrome(900009)).to.be.true;
    expect(isPalindrome(2001)).to.be.false;
    expect(isPalindrome(20000)).to.be.false;
    expect(isPalindrome(202)).to.be.true;
    expect(isPalindrome(20002)).to.be.true;
    expect(isPalindrome(100001)).to.be.true;
    expect(isPalindrome(9999999)).to.be.true;
    expect(isPalindrome(8)).to.be.true;
  });
});
