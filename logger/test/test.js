const expect = require('chai').expect;
// const lgg = require('./loggerr.js');
const mult = require('./loggerr.js');

describe('logg()', function() {
  const tests = [
    {args: [2], expected: 12 },
    {args: [4], expected: 24 }
  ];
  tests.forEach(function(test) {
    it(`correctly sums ${test.args}`, function() {
      const res = mult(test.args);
      expect(res).to.equal(test.expected);
    });
  });
});
