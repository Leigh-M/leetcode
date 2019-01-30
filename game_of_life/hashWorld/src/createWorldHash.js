const hashKey = require('./hashKey');

// need to add hashed neighbours of each cell to object!!

function createWorldHash(grid) {
  const world = new Map();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        world.set(hashKey([i, j]), { live: true, coords: [i, j], neighbours: [] });
      } else {
        world.set(hashKey([i, j]), { live: false, coords: [i, j], neighbours: [] });
      }
    }
  }
  return world;
}

module.exports = createWorldHash;
