const expect = require('chai').expect;
const addTwoArrays = require('./addTwoArrays.js');

describe('addTwoArrays()', function(){
  const tests = [
    {args: [[2, 4, 3], [5, 6, 4]], expected: [7, 0, 8] },
    {args: [[8, 46, 300, 500], [6000, 4, 90000]], expected: [ 8, 6, 4, 6, 4, 3, 0, 0, 5, 9 ] }
  ];
  tests.forEach(function(test) {
    it(`correctly reverses two linked lists ${test.args[0]} and ${test.args[1]}, stringifies & adds them, reverses the output integer and returns a LinkedNode List in the form of an array`, function() {
      const res = addTwoArrays(...test.args);
      // eql will loosely match, not the same array object
      expect(res).to.eql(test.expected);
    });
  });
});
