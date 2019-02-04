function buildNeighboursHash(live, neighbours, neighboursLookup) {
  const neighs = neighbours;
  live.forEach((item, index) => {
    const x = item.coords[0];
    const y = item.coords[1];
    neighboursLookup.get(index).adjacent.forEach((currentItem) => {
      if (neighs.has(currentItem)) {
        neighs.get(currentItem).count++;
      } else {
        neighs.set(currentItem, { count: 1 });
      }
    });
  });
  return neighs;
}

module.exports = buildNeighboursHash;
