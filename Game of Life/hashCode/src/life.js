/* eslint-env browser */
const hashKey = require('./hashKey');

// rules, assume all dead except for 2 cases
function survives(cell, nextCells) {
  return nextCells.push(cell);
}

function createCell(cell, nextCells) {
  return nextCells.push(cell);
}

function life(liveCells, neighbours) {
  const nextCells = [];
  liveCells.slice().forEach((currentItem) => {
    const cell = hashKey(currentItem);
    if (neighbours.has(cell)) {
      if (neighbours.get(cell).count === 2 || neighbours.get(cell).count === 3) {
        survives(currentItem, liveCells, nextCells);
      }
      /*
      // not required with current design
      if (neighbours.get(cell).count < 2) {
        diesUnderPoplation();
      }
      if (neighbours.get(cell).count > 3) {
        diesOverPoplation();
      }
      */
      neighbours.delete(cell);
    }
  });
  for (let cell of neighbours) {
    if (cell[1].count === 3) {
      createCell(cell[1].coords, nextCells);
    }
  }
  neighbours.clear();
  return nextCells;
}

module.exports = life;
