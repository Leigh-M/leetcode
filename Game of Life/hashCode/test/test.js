/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names */

const { expect } = require('chai');
const life = require('../src/life');
const buildNeighbours = require('../src/buildNeighbours');

// array equality irrespective of order
function arrayContainsArray(superset, subset) {
  // if need identical length
  if (subset.length !== superset.length) return false;
  const superStringified = [];
  superset.forEach((item) => {
    superStringified.push(JSON.stringify(item));
  });
  return subset.every(function (value) {
    return superStringified.includes(JSON.stringify(value));
  });
}

describe('Underpopulation: die if live cell has fewer than 2 live neighbouring cells', function () {
  const tests = [
    {
      input: [[3, 0], [1, 1], [4, 1], [2, 2], [4, 3], [0, 4], [2, 4], [4, 4]],
      expected: [[2, 1], [3, 1], [3, 2], [1, 3], [3, 4]],
    },
  ];
  tests.forEach(function (test) {
    const neighbours = new Map();
    buildNeighbours(test.input, neighbours, 10, 10);
    it('should kill cells, expected cells remain after next tick from input cells', function () {
      const res = life(test.input, neighbours);
      expect(arrayContainsArray(res, test.expected)).to.be.true; 
    });
  });
});

describe('Survive: continue living if 2-3 live neighbouring cells', function () {
  const tests = [
    {
      input: [[0, 0], [3, 0], [0, 1], [1, 1], [2, 1], [2, 2], [4, 2], [0, 3], [1, 3], [3, 3],
        [4, 3], [0, 4], [3, 4], [4, 4]],
      expected: [[0, 0], [0, 1], [2, 1], [4, 2], [0, 3], [1, 3], [0, 4], [3, 4], [4, 4], [2, 0],
        [1, 4], [2, 4]],
    },
  ];

  tests.forEach(function (test) {
    const neighbours = new Map();
    buildNeighbours(test.input, neighbours, 5, 5);
    it('should leave expected cells surviving on next tick from input', function () {
      const res = life(test.input, neighbours);
      expect(arrayContainsArray(res, test.expected)).to.be.true; 
    });
  });
});

describe('Overpopulation: die if more than 3 live neighbouring cells', function () {
  const tests = [
    {
      input: [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [4, 1], [3, 2], [4, 2], [0, 3],
        [1, 3], [2, 3], [3, 3], [4, 3], [1, 4], [2, 4]],
      expected: [[1, 0], [4, 0], [1, 1], [0, 2], [0, 3], [4, 3], [0, 4]],
    },
  ];
  tests.forEach(function (test) {
    const neighbours = new Map();
    buildNeighbours(test.input, neighbours, 5, 5);
    it('should kill many cells leaving expected cells from input cells', function () {
      const res = life(test.input, neighbours);
      expect(arrayContainsArray(res, test.expected)).to.be.true; 
    });
  });
});

describe('Alive: any dead cell with exactly 3 live neighbouring cell becomes alive', function () {
  const tests = [
    {
      input: [[0, 0], [1, 0], [3, 0], [4, 0], [1, 1], [4, 1], [2, 2], [0, 3], [1, 3], [2, 3],
        [3, 4]],
      expected: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [0, 1], [1, 1], [4, 1], [0, 2], [2, 2],
        [3, 2], [1, 3], [2, 3], [3, 3], [1, 4], [2, 4]],
    },
  ];
  tests.forEach(function (test) {
    const neighbours = new Map();
    buildNeighbours(test.input, neighbours, 5, 5);
    it('should produce new cells as expected from input', function () {
      const res = life(test.input, neighbours);
      expect(arrayContainsArray(res, test.expected)).to.be.true; 
    });
  });
});
