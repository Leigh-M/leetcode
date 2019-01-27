function survive(index, liveCells, neighbours) {
  const live = liveCells;
  const neighs = neighbours;
  neighs.delete(index);
  return { live, neighs };
}

function overCrowded(index, liveCells, neighbours) {
  const live = liveCells;
  const neighs = neighbours;
  live.delete(index);
  neighs.delete(index);
  return { live, neighs };
}

function lonely(index, liveCells, neighbours) {
  const live = liveCells;
  const neighs = neighbours;
  live.delete(index);
  neighs.delete(index);
  return { live, neighs };
}

function life(liveCells, neighbours) {
  let live = liveCells;
  let neighs = neighbours;
  live.forEach((item, index) => {
    if (neighs.has(index)) {
      if (neighs.get(index).count < 2) {
        ({ live, neighs } = lonely(index, live, neighs));
      }
      if (neighs.has(index)) {
        if (neighs.get(index).count === 2 || (neighs.get(index).count === 3)) {
          ({ live, neighs } = survive(index, live, neighs));
        }
      }
      if (neighs.has(index)) {
        if (neighs.get(index).count > 3) {
          ({ live, neighs } = overCrowded(index, live, neighs));
        }
      }
    }
    return null;
  });

  neighs.forEach((item, index) => {
    if (item.count === 3) {
      live.set(index, { coords: item.coords });
    }
  });
  // clear neighbours Map for next cycle
  neighs.clear();
  return live;
}

module.exports = life;

