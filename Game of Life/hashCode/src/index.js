/* eslint-env browser */
const life = require('./life');
const buildNeighbours = require('./buildNeighbours');
const populate = require('../src/populate');

const canv = document.getElementById('life');
const ctx = canv.getContext('2d');

// let liveCells = populate(5, 5);
// acorn

let liveCells = [[100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100]];

function draw() {
  ctx.clearRect(0, 0, 200, 200);
  const neighbours = buildNeighbours(liveCells, 200, 200);
  liveCells = life(liveCells, neighbours);
  ctx.fillStyle = '#101010';
  for (let i = 0; i < liveCells.length; i++) {
    ctx.fillRect(liveCells[i][0], liveCells[i][1], 1, 1);
  }
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

/*
function draw() {
  ctx.clearRect(0, 0, 500, 500);
  liveCells = life(liveCells, neighbours);
  neighbours = buildNeighbours(liveCells, 100, 100);
  ctx.fillStyle = '#101010';
  for (let i = 0; i < liveCells.length; i++) {
    ctx.fillRect(liveCells[i][0], liveCells[i][1], 1, 1);
  }
  requestAnimationFrame(draw);
}

// requestAnimationFrame(draw);
*/
