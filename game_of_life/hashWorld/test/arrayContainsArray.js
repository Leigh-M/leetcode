function arrayContainsArray(superset, subset) {
  // if need to be identical length
  if (subset.length !== superset.length) return false;
  const superStringified = [];
  superset.forEach((item) => {
    superStringified.push(JSON.stringify(item));
  });

  return subset.every(value => superStringified.includes(JSON.stringify(value)));
}

module.exports = arrayContainsArray;
