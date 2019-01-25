/* eslint-env browser */
// Leetcode instructions to return initial array hence intentionally mutating liveCells param:
/* eslint-disable no-param-reassign */

const hashKey = require('./hashKey');

function setKey(key, neighbours, coords) {
  if (neighbours.has(key)) {
    neighbours.get(key).count++;
  } else {
    neighbours.set(key, { count: 1, coords });
  }
}

function buildNeighboursHash(liveCells, neighbours, rows, cols) {
  liveCells.forEach((item, index) => {
    // find neighbours
    const x = item.coords[0];
    const y = item.coords[1];
    // ensure within display border
    if (x - 1 >= 0) {
      const key = hashKey([x - 1, y]);
      setKey(key, neighbours, [x - 1, y]);
    }
    if (x - 1 >= 0 && y - 1 >= 0) {
      const key = hashKey([x - 1, y - 1]);
      setKey(key, neighbours, [x - 1, y - 1]);
    }
    if (y - 1 >= 0) {
      const key = hashKey([x, y - 1]);
      setKey(key, neighbours, [x, y - 1]);
    }
    if (x + 1 < rows && y - 1 >= 0) {
      const key = hashKey([x + 1, y - 1]);
      setKey(key, neighbours, [x + 1, y - 1]);
    }
    if (x + 1 < rows) {
      const key = hashKey([x + 1, y]);
      setKey(key, neighbours, [x + 1, y]);
    }
    if (x + 1 < rows && y + 1 < cols) {
      const key = hashKey([x + 1, y + 1]);
      setKey(key, neighbours, [x + 1, y + 1]);
    }
    if (y + 1 < cols) {
      const key = hashKey([x, y + 1]);
      setKey(key, neighbours, [x, y + 1]);
    }
    if (x - 1 >= 0 && y + 1 < cols) {
      const key = hashKey([x - 1, y + 1]);
      setKey(key, neighbours, [x - 1, y + 1]);
    }
  });
  return neighbours;
}

module.exports = buildNeighboursHash;
