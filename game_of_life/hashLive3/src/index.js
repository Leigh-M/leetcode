/* eslint-env browser */
// view readme.md for usage/ design notes

const buildLiveHash = require('./buildLiveHash');
const buildNeighboursHash = require('./buildNeighboursHash');
const { life } = require('./life');
const buildNeighsLookup = require('./buildNeighsLookup');

const canv = document.getElementById('life');
const ctx = canv.getContext('2d');
ctx.fillStyle = '#101010';

// 'acorn' seed
const seed = [
  [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],
];

// max display size
const rows = 200;
const cols = 200;

let liveCells = buildLiveHash(seed);
const neighsLookup = buildNeighsLookup(rows, cols);

function draw() {
  const neighbours = buildNeighboursHash(liveCells, neighsLookup);
  liveCells = life(liveCells, neighbours, neighsLookup);
  ctx.clearRect(0, 0, 200, 200);
  liveCells.forEach((item) => {
    ctx.fillRect(item[0], item[1], 1, 1);
  });
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
