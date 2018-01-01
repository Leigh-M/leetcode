const expect = require('chai').expect;
const reverse = require('./reverse_int.js');

describe('reverse()', function() {
  const tests = [
    {args: [123], expected: 321 },
    {args: [2], expected: 2 },
    {args: [0], expected: 0 },
    {args: [25364758], expected: 85746352 },
  ];
  tests.forEach(function(test) {
    it(`correctly reverses ${test.args}`, function() {
      const res = reverse(...[test.args]);
      expect(res).to.equal(test.expected);
    });
  });
});
