/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names */

const { expect } = require('chai');
const life = require('../src/life');

describe('Life underpopulation: die if live cell has fewer than 2 live neighbouring cells', function () {
  const tests = [
    {
      initial: [
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
      ],
      expected: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
      ],
    },
  ];
  tests.forEach(function (test) {
    it(`Checks: ${test.initial}: next tick is ${test.expected}`, function () {
      const res = life(test.initial, test.expected);
      expect(res).to.eql(test.expected);
    });
  });
});

describe('Life survive: continue living if 2-3 live neighbouring cells', function () {
  const tests = [
    {
      initial: [
        [1, 0, 0, 1, 0],
        [1, 1, 1, 0, 1],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1],
      ],
      expected: [
        [1, 0, 1, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ],
    },
  ];
  tests.forEach(function (test) {
    it(`Checks ${test.initial}: next tick is ${test.expected}`, function () {
      const res = life(test.initial, test.expected);
      expect(res).to.eql(test.expected);
    });
  });
});

describe('Life overpopulation: die if more than 3 live neighbouring cells', function () {
  const tests = [
    {
      initial: [
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 0, 0],
      ],
      expected: [
        [0, 1, 0, 0, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0],
      ],
    },
  ];
  tests.forEach(function (test) {
    it(`Checks ${test.initial}: next tick is ${test.expected}`, function () {
      const res = life(test.initial, test.expected);
      expect(res).to.eql(test.expected);
    });
  });
});

describe('Life alive: any dead cell with exactly 3 live neighbouring cell becomes alive', function () {
  const tests = [
    {
      initial: [
        [1, 1, 0, 1, 1],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0],
      ],
      expected: [
        [1, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 0, 0],
      ],
    },
  ];
  tests.forEach(function (test) {
    it(`Checks ${test.initial}: next tick is ${test.expected}`, function () {
      const res = life(test.initial, test.expected);
      expect(res).to.eql(test.expected);
    });
  });
});
