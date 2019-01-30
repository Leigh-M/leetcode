/* eslint-env browser */
// view readme.md for usage/ design notes
const { createEmptyWorld, setSeed, createWorldHash } = require('./createWorld');
const { life } = require('./life');

// const canv = document.getElementById('life');
// const ctx = canv.getContext('2d');
// ctx.fillStyle = '#101010';

const world = createEmptyWorld(10, 10);
const seed = [
  [1, 3], [2, 2], [3, 4],
];
const seeded = setSeed(seed, world);
const worldHash = createWorldHash(seeded);

console.log(seeded);


/*
let liveCells = buildLiveHash(seed);
let neighbours = new Map();

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