const hashCoordToInteger = require('./hashCoordToInteger');

function buildNeighsLookup(rows, cols, arrSized) {
  const neighs = new Map();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const adj = [];
      if (i - 1 >= 0) {
        const key = hashCoordToInteger([i - 1, j], arrSized);
        adj.push(key);
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        const key = hashCoordToInteger([i - 1, j - 1], arrSized);
        adj.push(key);
      }
      if (j - 1 >= 0) {
        const key = hashCoordToInteger([i, j - 1], arrSized);
        adj.push(key);
      }
      if (i + 1 < rows && j - 1 >= 0) {
        const key = hashCoordToInteger([i + 1, j - 1], arrSized);
        adj.push(key);
      }
      if (i + 1 < rows) {
        const key = hashCoordToInteger([i + 1, j], arrSized);
        adj.push(key);
      }
      if (i + 1 < rows && j + 1 < cols) {
        const key = hashCoordToInteger([i + 1, j + 1], arrSized);
        adj.push(key);
      }
      if (j + 1 < cols) {
        const key = hashCoordToInteger([i, j + 1], arrSized);
        adj.push(key);
      }
      if (i - 1 >= 0 && j + 1 < cols) {
        const key = hashCoordToInteger([i - 1, j + 1], arrSized);
        adj.push(key);
      }
      neighs.set(hashCoordToInteger([i, j], arrSized), { adjacent: adj, coords: [i, j] });
    }
  }
  return neighs;
}

module.exports = buildNeighsLookup;
