const expect = require('chai').expect;
const reverse = require('../reverse_int.js');

describe('A basic test', () => {
  it('Should reverse the integer', function () {
    expect(reverse(123)).to.equal(321);
    expect(reverse(6598)).to.equal(8956);
    expect(reverse(1)).to.equal(1);
  });
});
