const expect = require('chai').expect;
const twoSum = require('./twosum.js');

// console.log(twoSum([3,2,4], 6));

describe('twoSum()', function() {
  const tests = [
    {args: [[3,2,4], 6], expected: [1, 2] },
  ];
  tests.forEach(function(test) {
    it(`correctly checks ${test.args} equals last arg and outputs the index of the args`, function() {
      const res = twoSum(...[test.args]);
      expect(res).to.equal(test.expected);
    });
  });
});
