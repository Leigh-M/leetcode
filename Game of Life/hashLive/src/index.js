/* eslint-env browser */
const buildLiveHash = require('./buildLiveHash');
// const buildNeighbours = require('./buildNeighbours');
// const life = require('./life');

// const canv = document.getElementById('life');
// const ctx = canv.getContext('2d');

// 'acorn' seed
let liveCells = [
  [100, 100], [101, 100], [101, 98], [103, 99], [104, 100], [105, 100], [106, 100],
];

// max display size
// const rows = 100;
// const cols = 100;

liveCells = buildLiveHash(liveCells);
console.log(liveCells);
