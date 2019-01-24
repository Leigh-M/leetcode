/* eslint-env browser */
const hashKey = require('./hashKey');

function checkKey(key, neighbours, coords) {
  (neighbours.has(key)) ? neighbours.get(key).count++ : neighbours.set(key, {
    count: 1, coords });
}

function buildNeighboursHash(liveCells, neighbours, rows, cols) {
  liveCells.forEach((item) => {
    // find neighbours
    const x = item.coords[0];
    const y = item.coords[0];
    // ensure within display border
    if (x - 1 >= 0 && y - 1 >= 0) {
      const key = hashKey([x - 1, y - 1]);
      checkKey(key, neighbours, item.coords);
    }

    if (x + 1 < rows && y + 1 < cols) {
      const key = hashKey([x + 1, y + 1]);
      checkKey(key, neighbours, item.coords);
    }

    if (x - 1 >= 0 && y + 1 < cols) {
      const key = hashKey([x - 1, y + 1]);
      checkKey(key, neighbours, item.coords);
    }

    if (x + 1 < rows && y - 1 >= 0) {
      const key = hashKey([x + 1, y - 1]);
      checkKey(key, neighbours, item.coords);
    }

    if (y - 1 >= 0) {
      const key = hashKey([x, y - 1]);
      checkKey(key, neighbours, item.coords);
    }

    if (x - 1 >= 0) {
      const key = hashKey([x - 1, y]);
      checkKey(key, neighbours, item.coords);
    }

    if (x + 1 < rows) {
      const key = hashKey([x + 1, y]);
      checkKey(key, neighbours, item.coords);
    }

    if (y + 1 < cols) {
      const key = hashKey([x, y + 1]);
      checkKey(key, neighbours, item.coords);
    }
  });
  return neighbours;
}

module.exports = buildNeighboursHash;
