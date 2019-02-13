/* eslint-env browser */
// view readme.md for usage/ design notes

const buildLiveHash = require('./buildLiveHash');
const buildNeighboursHash = require('./buildNeighboursHash');
const { life } = require('./life');
const buildNeighsLookup = require('./buildNeighsLookup');

// const canv = document.getElementById('life');
// const ctx = canv.getContext('2d');
// ctx.fillStyle = '#101010';

/*
// 'acorn' seed
const seed = [
  [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],
];
*/

const seed = [
  [1, 2], [2, 2], [3, 2],
];

// max display size
const rows = 5;
const cols = 5;


// let's just check no collisions primarily on 1000, 1000, then we know keys all same in live &
// neighsLookup
// or even better handle the collisions - but not primary concern
// need to know why the keys are looking different


// appropriately size hash ~ 1.3x max expected
const arrSized = new Array(Math.ceil(rows * cols * 1.3));

const neighsLookup = buildNeighsLookup(rows, cols, arrSized);

// let liveCells = buildLiveHash(seed, hashSized);

const neighbours = buildNeighboursHash(liveCells, neighsLookup);
liveCells = life(liveCells, neighbours, neighsLookup);

console.log(liveCells);
/*
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

*/
