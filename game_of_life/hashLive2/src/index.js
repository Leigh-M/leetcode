/* eslint-env browser */
// view readme.md for usage/ design notes

const buildLiveHash = require('./buildLiveHash');
const buildNeighboursHash = require('./buildNeighboursHash');
const { life } = require('./life');
const buildNeighsLookup = require('./buildNeighsLookup');

(function runLife() {
  // const canv = document.getElementById('life');
  // const ctx = canv.getContext('2d');
  // ctx.fillStyle = '#101010';

  // 'acorn' seed
  /*
  const seed = [
    [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],
  ];
  */
  // const seed = [[1, 2], [2, 2], [1, 3], [2, 3]];
  const seed = [[1, 2], [2, 2]];

  // max display size
  const rows = 5;
  const cols = 5;

  let liveCells = buildLiveHash(seed);

  const neighsLookup = buildNeighsLookup(rows, cols);

  let neighbours = new Map();
  neighbours = buildNeighboursHash(liveCells, neighbours, neighsLookup);

  // liveCells = life(liveCells, neighbours, neighsLookup);

  console.log(neighsLookup);
}());


/*
function draw() {
  neighbours = buildNeighboursHash(liveCells, neighbours, rows, cols);
  liveCells = life(liveCells, neighbours);
  ctx.clearRect(0, 0, 200, 200);
  liveCells.forEach((item) => {
    ctx.fillRect(item.coords[0], item.coords[1], 1, 1);
  });
  requestAnimationFrame(draw);
}


requestAnimationFrame(draw);
*/
