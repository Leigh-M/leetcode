const expect = require('chai').expect;
const twoSum = require('./twosum.js');

describe('twoSum()', function() {
  const tests = [
    {args: [2,4,6], target: 10, expected: [1, 2] },
    {args: [3,8,4,6,9,2], target: 14, expected: [1, 3] },
    {args: [2,7], target: 9, expected: [0, 1] },
    {args: [1,0], target: 1, expected: [0, 1] }
  ];
  tests.forEach( function(test) {
    it(`Checks ${test.args} if sum of two values equals the target ${test.target} and returns the indexes of those values`, function() {
      const res = twoSum(test.args, test.target);
      expect(res).to.eql(test.expected);
    });
  });
});
