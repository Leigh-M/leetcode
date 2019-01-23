/* eslint-env browser */
const life = require('./life');
// const draw = require('./draw');
const buildNeighbours = require('./buildNeighbours');

// const canv = document.getElementById('life');
// const ctx = canv.getContext('2d');

// set grid size and initial
const rows = 10;
const cols = 10;
// const seedCells = [[2, 2], [2, 4], [3, 4], [3, 3], [4, 4], [0, 1], [0, 2]];
// const seedCells = [[0, 1], [1, 1], [2, 1]];

const seedCells = [[3, 0], [1, 1], [4, 1], [2, 2], [4, 3], [0, 4], [2, 4], [4, 4]];

const neighbours = new Map();
buildNeighbours(seedCells, neighbours, rows, cols);

console.log(life(seedCells, neighbours));


// requestAnimationFrame(draw(ctx));
// to test draw function
