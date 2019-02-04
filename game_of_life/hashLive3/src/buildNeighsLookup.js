const hashKey = require('./hashKey');

function buildNeighsLookup(rows, cols) {
  const neighs = new Map();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const adj = [];
      if (i - 1 >= 0) {
        const key = hashKey([i - 1, j]);
        adj.push(key);
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        const key = hashKey([i - 1, j - 1]);
        adj.push(key);
      }
      if (j - 1 >= 0) {
        const key = hashKey([i, j - 1]);
        adj.push(key);
      }
      if (i + 1 < rows && j - 1 >= 0) {
        const key = hashKey([i + 1, j - 1]);
        adj.push(key);
      }
      if (i + 1 < rows) {
        const key = hashKey([i + 1, j]);
        adj.push(key);
      }
      if (i + 1 < rows && j + 1 < cols) {
        const key = hashKey([i + 1, j + 1]);
        adj.push(key);
      }
      if (j + 1 < cols) {
        const key = hashKey([i, j + 1]);
        adj.push(key);
      }
      if (i - 1 >= 0 && j + 1 < cols) {
        const key = hashKey([i - 1, j + 1]);
        adj.push(key);
      }
      neighs.set(hashKey([i, j]), { adjacent: adj, coords: [i, j] });
    }
  }
  return neighs;
}

module.exports = buildNeighsLookup;
