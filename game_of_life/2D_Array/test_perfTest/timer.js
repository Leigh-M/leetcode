const life = require('../src/life');

// timer
function timer(grid, frames) {
  let count = 0;
  const t1 = new Date();
  function tick(grd) {
    count++;
    life(grd);
    if (count < frames) tick(grid);
  }
  // start the cycle
  tick(grid);
  if (count === frames) {
    return new Date() - t1;
  }
  return null;
}

module.exports = timer;
