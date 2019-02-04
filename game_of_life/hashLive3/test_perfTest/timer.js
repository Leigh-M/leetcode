const { life } = require('../src/life');
const buildLiveHash = require('../src/buildLiveHash');
const buildNeighboursHash = require('../src/buildNeighboursHash');
const buildNeighsLookup = require('../src/buildNeighsLookup');

// timer
function timer(seed, rows, cols, frames) {
  const neighsLookup = buildNeighsLookup(rows, cols);
  let count = 0;
  let liveCells = buildLiveHash(seed);

  const t1 = new Date();
  let t2;
  function cycle(live) {
    count++;
    const neighbours = buildNeighboursHash(liveCells, neighsLookup);
    liveCells = life(live, neighbours, neighsLookup);
    if (count < frames) cycle(liveCells);
  }
  // start the cycle
  cycle(liveCells);
  if (count === frames) {
    t2 = new Date() - t1;
  }
  return t2;
}

module.exports = timer;
