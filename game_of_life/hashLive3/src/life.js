function survive(index, liveCells, neighbours) {
  const live = liveCells;
  const neighs = neighbours;
  neighs.delete(index);
  return { live, neighs };
}

function die(index, liveCells, neighbours) {
  const live = liveCells;
  const neighs = neighbours;
  live.delete(index);
  neighs.delete(index);
  return { live, neighs };
}

function life(liveCells, neighbours, neighsLookup) {
  let live = liveCells;
  let neighs = neighbours;
  live.forEach((item, index) => {
    if (neighs.has(index)) {
      if (neighs.get(index).count < 2 || neighs.get(index).count > 3) {
        ({ live, neighs } = die(index, live, neighs));
      }
      if (neighs.has(index)) {
        if (neighs.get(index).count === 2 || (neighs.get(index).count === 3)) {
          ({ live, neighs } = survive(index, live, neighs));
        }
      }
    }
    return null;
  });
  // any remaining cells with count 3 must currently not be live, set live in Map
  neighs.forEach((item, index) => {
    if (item.count === 3) {
      live.set(index, neighsLookup.get(index).coords);
    }
  });
  // clear neighbours Map for next cycle
  neighs.clear();
  return live;
}

module.exports = {
  life, survive, die,
};
