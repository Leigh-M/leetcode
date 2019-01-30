const { life } = require('../src/life');
const buildLiveHash = require('../src/buildLiveHash');
const buildNeighboursHash = require('../src/buildNeighboursHash');

// timer
function timer(seed, rows, cols, frames) {
  let count = 0;
  let liveCells = buildLiveHash(seed);
  let neighbours = new Map();

  const t1 = new Date();
  let t2;
  function cycle(live) {
    count++;
    neighbours = buildNeighboursHash(live, neighbours, rows, cols);
    liveCells = life(live, neighbours);
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
