function createEmptyWorld(rows, cols) {
  const grd = [];
  for (let i = 0; i < rows; i++) {
    grd[i] = [];
    for (let j = 0; j < cols; j++) {
      grd[i][j] = 0;
    }
  }
  return grd;
}

function setSeed(seed, target) {
  const grd = target;
  for (let i = 0; i < seed.length; i++) {
    grd[seed[i][0]][seed[i][1]] = 1;
  }
  return grd;
}

/*
console.log(createList([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0]]));
*/

module.exports = { createEmptyWorld, setSeed };
