const life = require('../src/life');
const buildNeighbours = require('../src/buildNeighbours');
const populate = require('../src/populate');

const seed = populate(1000, 1000);
const neighbours = new Map();
buildNeighbours(seed, neighbours, 1000, 1000);

function timeTicker() {
  let count = 0;
  let lastCells = [];
  const t1 = new Date();
  function tick(cells, neighb) {
    count++;
    const nextCells = life(cells, neighb);
    if (count < 3) {
      buildNeighbours(nextCells, neighbours, 1000, 1000);
      tick(nextCells, neighbours);
    } else {
      lastCells = nextCells;
    }
    return lastCells;
  }
  // start the cycle
  tick(seed, neighbours);
  return [new Date() - t1, lastCells];
}

console.log(timeTicker());
// approx 1000ms on my machine for 15 cycles: 15fps not including draw function
// for large 1000 x 1000 grid

