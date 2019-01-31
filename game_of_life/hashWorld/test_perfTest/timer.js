const life = require('../src/life');
const { createEmptyWorld, setSeed } = require('../src/createWorld');
const createWorldHash = require('../src/createWorldHash');

// timer
function timer(seed, rows, cols, frames) {
  let count = 0;
  const world = createEmptyWorld(rows, cols);
  const seeded = setSeed(seed, world);
  const hashWorld = createWorldHash(seeded);

  const t1 = new Date();
  let t2;
  function cycle(World) {
    count++;
    const worldHash = life(World);
    if (count < frames) cycle(worldHash);
  }
  // start the cycle
  cycle(hashWorld);
  if (count === frames) {
    t2 = new Date() - t1;
  }
  return t2;
}

module.exports = timer;
