/* eslint-env browser */
// view readme.md for usage/ design notes
const { createEmptyWorld, setSeed } = require('./createWorld');
const createWorldHash = require('./createWorldHash');
const life = require('./life');

const canv = document.getElementById('life');
const ctx = canv.getContext('2d');
ctx.fillStyle = '#101010';

const world = createEmptyWorld(200, 200);

const seed = [
  [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],
];

const seeded = setSeed(seed, world);
let worldHash = createWorldHash(seeded);

function draw() {
  const liveCells = [];
  worldHash.forEach((item) => {
    if (item.live === true) liveCells.push(item.coords);
  });
  ctx.clearRect(0, 0, 200, 200);
  liveCells.forEach((item) => {
    ctx.fillRect(item[0], item[1], 1, 1);
  });
  worldHash = life(worldHash);
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

// toDo:
// integers as keys of Map
// array version (integer keys)
// memoized version of hashLive
