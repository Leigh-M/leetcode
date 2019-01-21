const life = require('../src/life');

// creates a grid populated with random binary digits
function createGrid(rows, cols) {
  const grd = [];
  for (let i = 0; i < rows; i++) {
    grd[i] = [];
    for (let j = 0; j < cols; j++) {
      grd[i][j] = Math.round(Math.random());
    }
  }
  return grd;
}

// create a large grid
const grid = (createGrid(1000, 1000));

function timeTicker() {
  let count = 0;
  const t1 = new Date();
  function tick(grd) {
    count++;
    life(grd);
    if (count < 15) tick(grid);
  }
  // start the cycle
  tick(grid);
  if (count === 15) {
    return new Date() - t1;
  }
  return null;
}

console.log(timeTicker());
// approx 1000ms on my machine for 15 cycles: 15fps not including draw function
// for 1000 x 1000 grid
