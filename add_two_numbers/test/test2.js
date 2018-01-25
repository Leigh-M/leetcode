const expect = require('chai').expect;
const addTwoNumbers = require('./addTwoNums.js');

describe('addTwoNumbers()', function(){
  const tests = [
   {args: [[2, 4, 3], [5, 6, 4]], expected: [7, 0, 8] }
  ];
  tests.forEach(function(test) {
    it(`correctly reverses two linked lists ${test.args[0]} and ${test.args[1]}, stringifies & adds them, reverses the output integer and returns a LinkedNode List in the form of an array`, function() {
      const res = addTwoNumbers(...test.args);
      // eql will loosely match, not the same array object
      expect(res).to.eql(test.expected);
    });
  });
});
