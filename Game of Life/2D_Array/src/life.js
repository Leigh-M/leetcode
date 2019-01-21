/* eslint-env browser */

// copy required to iterate over and mutate array, 3x faster than JSON.stringify(JSON.parse(orig))
function deepCopy(p, c) {
  c = c || [];
  for (const [index, value] of p.entries()) {
    if (Array.isArray(value)) {
      c[index] = [];
      deepCopy(value, c[index]);
    } else c.push(value);
  }
  return c;
}

function life(grd) {
  const copy = deepCopy(grd);
  const cols = grd[0].length;
  const rows = grd.length;
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      count = 0;
      // Without wrapping, includes edges but not off-canvas
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (copy[i - 1][j - 1] === 1) count++;
      }
      if (i + 1 < rows && j + 1 < cols) {
        if (copy[i + 1][j + 1] === 1) count++;
      }
      if (i - 1 >= 0 && j + 1 < cols) {
        if (copy[i - 1][j + 1] === 1) count++;
      }
      if (i + 1 < rows && j - 1 >= 0) {
        if (copy[i + 1][j - 1] === 1) count++;
      }
      if (j - 1 >= 0) {
        if (copy[i][j - 1] === 1) count++;
      }
      if (i - 1 >= 0) {
        if (copy[i - 1][j] === 1) count++;
      }
      if (i + 1 < rows) {
        if (copy[i + 1][j] === 1) count++;
      }
      if (j + 1 < cols) {
        if (copy[i][j + 1] === 1) count++;
      }
      if (copy[i][j] === 1) {
        grd[i][j] = (count >= 2 && count <= 3) ? 1 : 0;
      }
      if (copy[i][j] === 0) {
        if (count === 3) grd[i][j] = 1;
      }
    }
  }
  return grd;
}

module.exports = life;
