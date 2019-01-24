/* eslint-env browser */
const life = require('./life');
const buildNeighbours = require('./buildNeighbours');
const populate = require('../src/populate');

function draw(ctx) {
  ctx.clearRect(0, 0, 300, 300);
  let cells = life(grid);
  ctx.fillStyle = '#101010';
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        ctx.fillRect(i, j, 1, 1);
      }
    }
  }
  requestAnimationFrame(draw);
}

module.exports = draw;


function timeTicker() {
  let lastCells = [];

  function tick(cells, neighb) {
    const nextCells = life(cells, neighb);
    if (count < 3) {
      buildNeighbours(nextCells, neighbours, 1000, 1000);
      tick(nextCells, neighbours);
    } else {
      lastCells = nextCells;
    }
    return lastCells;
  }
}