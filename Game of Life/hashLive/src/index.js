/* eslint-env browser */
const buildLiveHash = require('./buildLiveHash');
const buildNeighboursHash = require('./buildNeighboursHash');
// const life = require('./life');

// const canv = document.getElementById('life');
// const ctx = canv.getContext('2d');

// 'acorn' seed
const seed = [
  [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],
];
const neighbours = new Map();

// max display size
const rows = 100;
const cols = 100;

let live = buildLiveHash(seed);
let neighs = buildNeighboursHash(live, neighbours, rows, cols);

console.log(neighs);
