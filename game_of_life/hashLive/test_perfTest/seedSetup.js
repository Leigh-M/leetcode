// populate liveCells seed randomly
function createRandomSeed(rows, cols) {
  const seed = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Math.round(Math.random())) {
        seed.push([i, j]);
      }
    }
  }
  return seed;
}

module.exports = createRandomSeed;
