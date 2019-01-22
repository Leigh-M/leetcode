/* eslint-env browser */
const life = require('./life.js');

function draw(ctx) {
  ctx.clearRect(0, 0, 300, 300);
  life(grid);
  ctx.fillStyle = '#101010';
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        ctx.fillRect(i, j, 1, 1);
      }
    }
  }
  requestAnimationFrame(draw);
}

module.exports = draw;
