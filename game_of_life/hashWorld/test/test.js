/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback, func-names */
const { expect } = require('chai');
const life = require('../src/life');
const lifeTests = require('./testRunnerData');
const tag1 = require('./taggedTemplates');
const { createEmptyWorld, setSeed } = require('../src/createWorld');
const createWorldHash = require('../src/createWorldHash');
const arrayContainsArray = require('./arrayContainsArray');

// life(), whole system test
describe('life test', function () {
  lifeTests.forEach(function (test) {
    it(tag1`should expect liveCells Map after life() has returned with input cells ${test.seed} after next tick to contain all ${test.expected} and be same size`, function () {
      const world = createEmptyWorld(200, 200);
      const seeded = setSeed(test.seed, world);
      const worldHash = life(createWorldHash(seeded));
      const liveCells = [];
      worldHash.forEach((item) => {
        if (item.live === true) liveCells.push(item.coords);
      });
      // check res contains all same elements as expected, unordered
      const res = arrayContainsArray(test.expected, liveCells);
      expect(res).to.equal(true);
    });
  });
});

