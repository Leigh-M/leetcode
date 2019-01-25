// for unit testing, no return required for this design, survivors remain in Map
// function still necessary to remove 'live' cells from neighbours hash
function survive(index, live, neighbours) {
  if (neighbours.has(index)) {
    if (neighbours.get(index).count === 2 || neighbours.has(index).count === 3) {
      // remove from neighbours hash, those eventually left will be non-live cells
      neighbours.delete(index);
      return true;
    }
  }
  return false;
}

function overCrowded(index, live, neighbours) {
  if (neighbours.has(index)) {
    if (neighbours.get(index).count > 3) {
      live.delete(index);
      // remove from neighbours, remainder are non-live cells
      neighbours.delete(index);
    }
  }
}

function lonely(index, live, neighbours) {
  if (neighbours.has(index)) {
    if (neighbours.get(index).count < 2) {
      live.delete(index);
      // remove from neighbours, remainder are non-live cells
      neighbours.delete(index);
    }
  }
}

function life(live, neighbours) {
  live.forEach((item, index) => {
    survive(index, live, neighbours);
    overCrowded(index, live, neighbours);
    lonely(index, live, neighbours);
  });

  neighbours.forEach((item, index) => {
    if (item.count === 3) {
      live.set(index, { coords: item.coords });
    }
  });

  // clear hash for next cycle
  neighbours.clear();
}

module.exports = life;

