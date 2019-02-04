/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names */
const { expect } = require('chai');
const buildNeighboursHash = require('../src/buildNeighboursHash');
const buildLiveHash = require('../src/buildLiveHash');
const { lifeTests } = require('./testRunnerData');
const { life } = require('../src/life');
const tag4 = require('./taggedTemplates');
const buildNeighsLookup = require('../src/buildNeighsLookup');

// life(), whole system test
describe('life test', function () {
  lifeTests.forEach(function (test) {
    it(tag4`should expect liveCells Map after life() has returned with input cells ${test.seed} after next tick to contain all ${test.expected} and be same size`, function () {
      const liveCells = buildLiveHash(test.seed);
      const rows = 200, cols = 200;
      const neighsLookup = buildNeighsLookup(rows, cols);
      const neighbours = buildNeighboursHash(liveCells, neighsLookup);
      const nextCells = life(liveCells, neighbours, neighsLookup);
      // secondary use here to build hashed Map of expected
      const expected = buildLiveHash(test.expected);
      // check expected Map contains every key in nextCells & size the same
      let containsAll = true;
      nextCells.forEach((item, index) => {
        if (!expected.has(index)) {
          containsAll = false;
        }
      });
      expect(containsAll && (nextCells.size === expected.size)).to.equal(true);
    });
  });
});

/*
// overCrowded test
describe('overCrowded logic test, delete from liveCells', function () {
  logicTests.forEach(function (test) {
    it(tag3`should remove cell ${test.diedOverCrowding} from liveCells ${test.overCrowd}`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedOverCrowding;
      const res = overCrowded(testCell, liveCells, neighs);
      const inMap = res.live.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});

describe('overCrowded logic test, delete from neighbours Map', function () {
  logicTests.forEach(function (test) {
    it(`should remove cell ${test.diedOverCrowding} from neighbouring cells Map`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedOverCrowding;
      const res = overCrowded(testCell, liveCells, neighs);
      const inMap = res.neighs.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
// overCrowded test
describe('overCrowded logic test, delete from liveCells', function () {
  logicTests.forEach(function (test) {
    it(tag3`should remove cell ${test.diedOverCrowding} from liveCells ${test.overCrowd}`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedOverCrowding;
      const res = overCrowded(testCell, liveCells, neighs);
      const inMap = res.live.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});

describe('overCrowded logic test, delete from neighbours Map', function () {
  logicTests.forEach(function (test) {
    it(`should remove cell ${test.diedOverCrowding} from neighbouring cells Map`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedOverCrowding;
      const res = overCrowded(testCell, liveCells, neighs);
      const inMap = res.neighs.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});
// loney test
describe('lonely logic test, delete from liveCells', function () {
  logicTests.forEach(function (test) {
    it(tag3`should remove cell ${test.diedLoneliness} from liveCells ${test.lonelyCells}`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedLoneliness;
      const res = lonely(testCell, liveCells, neighs);
      const inMap = res.live.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});

describe('lonely logic test, delete from neighbours Map', function () {
  logicTests.forEach(function (test) {
    it(tag3`should remove cell ${test.diedLoneliness} from neighbouring cells Map with input cells ${test.lonelyCells}`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedLoneliness;
      const res = lonely(testCell, liveCells, neighs);
      const inMap = res.neighs.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});
});
// loney test
describe('lonely logic test, delete from liveCells', function () {
  logicTests.forEach(function (test) {
    it(tag3`should remove cell ${test.diedLoneliness} from liveCells ${test.lonelyCells}`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedLoneliness;
      const res = lonely(testCell, liveCells, neighs);
      const inMap = res.live.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});

describe('lonely logic test, delete from neighbours Map', function () {
  logicTests.forEach(function (test) {
    it(tag3`should remove cell ${test.diedLoneliness} from neighbouring cells Map with input cells ${test.lonelyCells}`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.diedLoneliness;
      const res = lonely(testCell, liveCells, neighs);
      const inMap = res.neighs.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});
*/
