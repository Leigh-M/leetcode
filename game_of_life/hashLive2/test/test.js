/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names */
const { expect } = require('chai');
const buildNeighboursHash = require('../src/buildNeighboursHash');
const buildLiveHash = require('../src/buildLiveHash');
const { buildNeighboursTests, logicTests, lifeTests } = require('./testRunnerData');
const {
  life, survive,
} = require('../src/life');
const {
  tag1, tag2, tag4,
} = require('./taggedTemplates');
const buildNeighsLookup = require('../src/buildNeighsLookup');

/*
// unit tests
// tagged templates for output formatting/ readability

// total neighbouring cells Map size test
describe('buildNeighboursHash size test', function () {
  buildNeighboursTests.forEach(function (test) {
    const neighbours = new Map();
    it(tag1`Should build a Map of neighbours from input cells ${test.liveCells} expected size ${test.expectedMapLength}`, function () {
      const neighs = buildNeighboursHash(buildLiveHash(test.liveCells), neighbours, 200, 200);
      expect(neighs.size).to.equal(test.expectedMapLength);
    });
  });
});

// exact adjacent cells count test
describe('buildNeighboursHash neighbouring cell key: count test', function () {
  buildNeighboursTests.forEach(function (test) {
    const neighbours = new Map();
    const neighs = buildNeighboursHash(buildLiveHash(test.liveCells), neighbours);
    test.adj.forEach((item) => {
      it(tag2`should expect count of neighbouring cells to cell: ${item[0]} to be: ${item[1]}`, function () {
        expect(neighs.get(item[0]).count).to.equal(item[1]);
      });
    });
  });
});

// survive test
describe('survive logic test, remain as live', function () {
  logicTests.forEach(function (test) {
    it(`should expect cell ${test.stillLive} exists to be true`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.stillLive;
      const res = survive(testCell, liveCells, neighs);
      const exists = res.live.has(testCell);
      expect(exists).to.equal(true);
    });
  });
});

describe('survive logic test, delete from neighbouring', function () {
  logicTests.forEach(function (test) {
    it(`should remove survivor cell ${test.stillLive} from neighbours Map to enable correct count on remaining dead cells`, function () {
      const liveCells = buildLiveHash(test.live);
      const neighbours = new Map();
      const neighs = buildNeighboursHash(liveCells, neighbours, 200, 200);
      const testCell = test.stillLive;
      const res = survive(testCell, liveCells, neighs);
      const inMap = res.neighs.has(testCell);
      expect(inMap).to.equal(false);
    });
  });
});
*/

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
