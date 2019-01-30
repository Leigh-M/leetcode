// creates a grid populated with random binary digits
function createRandomGrid(rows, cols) {
  const grd = [];
  for (let i = 0; i < rows; i++) {
    grd[i] = [];
    for (let j = 0; j < cols; j++) {
      grd[i][j] = Math.round(Math.random());
    }
  }
  return grd;
}

// creates a blank grid ready for population by input seed
function createBlankGrid(rows, cols) {
  const grd = [];
  for (let i = 0; i < rows; i++) {
    grd[i] = [];
    for (let j = 0; j < cols; j++) {
      grd[i][j] = 0;
    }
  }
  return grd;
}

// 'acorn' seed as 1's
function setSeed(seed, targerArr) {
  const grd = targerArr;
  for (let i = 0; i < seed.length; i++) {
    grd[seed[i][0]][seed[i][1]] = 1;
  }
  return grd;
}

module.exports = {
  createRandomGrid, createBlankGrid, setSeed,
};
