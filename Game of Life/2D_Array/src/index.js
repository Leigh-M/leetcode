/* eslint-env browser */
const life = require('./life.js');

const canv = document.getElementById('life');
const ctx = canv.getContext('2d');

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

const grid = createGrid(100, 100);

function draw() {
  ctx.clearRect(0, 0, 100, 100);
  life(grid);
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

requestAnimationFrame(draw);

// to test draw function
module.exports = draw;
