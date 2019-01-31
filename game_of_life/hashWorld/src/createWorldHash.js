const hashKey = require('./hashKey');
const buildNeighbours = require('./buildNeighbours');

function createWorldHash(grid) {
  const world = new Map();
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        world.set(hashKey([i, j]), {
          live: true,
          coords: [i, j],
          neighbours: buildNeighbours([i, j], rows, cols),
          liveNeighbours: 0,
        });
      } else {
        world.set(hashKey([i, j]), {
          live: false,
          coords: [i, j],
          neighbours: buildNeighbours([i, j], rows, cols),
          liveNeighbours: 0,
        });
      }
    }
  }
  return world;
}

module.exports = createWorldHash;
