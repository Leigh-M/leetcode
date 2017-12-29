const expect = require('chai').expect;
const twoSum = require('../twosum.js');

console.log(twoSum([3,2,4], 6));

describe('A basic test', function () {
  it('Should take nums in array and return the value', function () {
    expect(twoSum([3,2,4], 6)).to.equal([1,2]);
  });
});
