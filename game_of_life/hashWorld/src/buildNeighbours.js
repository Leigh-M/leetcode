/* eslint-env browser */
/* eslint-disable no-param-reassign */

const hashKey = require('./hashKey');

function buildNeighbours(Cell, rows, cols) {
  const neighbours = [];
  const cell = Cell;
  const x = cell[0];
  const y = cell[1];
  let key = '';
  // ensure within display border
  if (x - 1 >= 0) {
    key = hashKey([x - 1, y]);
    neighbours.push(key);
  }
  if (x - 1 >= 0 && y - 1 >= 0) {
    key = hashKey([x - 1, y - 1]);
    neighbours.push(key);
  }
  if (y - 1 >= 0) {
    key = hashKey([x, y - 1]);
    neighbours.push(key);
  }
  if (x + 1 < rows && y - 1 >= 0) {
    key = hashKey([x + 1, y - 1]);
    neighbours.push(key);
  }
  if (x + 1 < rows) {
    key = hashKey([x + 1, y]);
    neighbours.push(key);
  }
  if (x + 1 < rows && y + 1 < cols) {
    key = hashKey([x + 1, y + 1]);
    neighbours.push(key);
  }
  if (y + 1 < cols) {
    key = hashKey([x, y + 1]);
    neighbours.push(key);
  }
  if (x - 1 >= 0 && y + 1 < cols) {
    key = hashKey([x - 1, y + 1]);
    neighbours.push(key);
  }
  return neighbours;
}

module.exports = buildNeighbours;
