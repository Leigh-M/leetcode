/* eslint-env browser */
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
  const live = liveCells;
  const neighs = neighbours;
  live.forEach((item) => {
    // find neighbours
    const x = item.coords[0];
    const y = item.coords[1];
    let key = hashKey([x, y]);
    if (!neighs.has(key)) neighs.set(key, { count: 0, coords: [x, y] });
    // ensure within display border
    if (x - 1 >= 0) {
      key = hashKey([x - 1, y]);
      setKey(key, neighs, [x - 1, y]);
    }
    if (x - 1 >= 0 && y - 1 >= 0) {
      key = hashKey([x - 1, y - 1]);
      setKey(key, neighs, [x - 1, y - 1]);
    }
    if (y - 1 >= 0) {
      key = hashKey([x, y - 1]);
      setKey(key, neighs, [x, y - 1]);
    }
    if (x + 1 < rows && y - 1 >= 0) {
      key = hashKey([x + 1, y - 1]);
      setKey(key, neighs, [x + 1, y - 1]);
    }
    if (x + 1 < rows) {
      key = hashKey([x + 1, y]);
      setKey(key, neighs, [x + 1, y]);
    }
    if (x + 1 < rows && y + 1 < cols) {
      key = hashKey([x + 1, y + 1]);
      setKey(key, neighs, [x + 1, y + 1]);
    }
    if (y + 1 < cols) {
      key = hashKey([x, y + 1]);
      setKey(key, neighs, [x, y + 1]);
    }
    if (x - 1 >= 0 && y + 1 < cols) {
      key = hashKey([x - 1, y + 1]);
      setKey(key, neighs, [x - 1, y + 1]);
    }
  });
  return neighs;
}

module.exports = buildNeighboursHash;
