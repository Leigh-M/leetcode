// populate array with potential length rows*cols of randomly generated binary digits
function populate(rows, cols) {
  const grd = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Math.round(Math.random())) {
        grd.push([i, j]);
      }
    }
  }
  return grd;
}

module.exports = populate;
