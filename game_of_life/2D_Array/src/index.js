/* eslint-env browser */
const life = require('./life.js');

const canv = document.getElementById('life');
const ctx = canv.getContext('2d');

function createGrid(rows, cols) {
  const grd = [];
  for (let i = 0; i < rows; i++) {
    grd[i] = [];
    for (let j = 0; j < cols; j++) {
      grd[i][j] = 0;
    }
  }
  return grd;
}

// create all zero's grid
const initialGrid = createGrid(200, 200);

// 'acorn' seed as 1's
function setSeed(seed, targerArr) {
  const grd = targerArr;
  for (let i = 0; i < seed.length; i++) {
    grd[seed[i][0]][seed[i][1]] = 1;
  }
  return grd;
}

// 'acorn' seed initial start
const seed = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];
const grid = setSeed(seed, initialGrid);

function draw() {
  ctx.clearRect(0, 0, 200, 200);
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


/*
// for a random grid of binary digits
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
*/
