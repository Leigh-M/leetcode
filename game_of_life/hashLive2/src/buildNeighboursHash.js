function buildNeighboursHash(live, neighboursLookup) {
  const neighs = new Map();
  live.forEach((item, index) => {
    neighboursLookup.get(index).adjacent.forEach((currentItem) => {
      if (neighs.has(currentItem)) {
        neighs.get(currentItem).count++;
      } else {
        neighs.set(currentItem, { count: 1 });
      }
    });
    // for the occasion where live cell with no live neighbours so not in neighs Map
    if (!neighs.has(index)) {
      neighs.set(index, { count: 0 });
    }
  });
  return neighs;
}

module.exports = buildNeighboursHash;
