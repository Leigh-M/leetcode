const hashCoordToInteger = require('./hashCoordToInteger');

function buildHash(coords, live, hashSized) {
  const hashCode = hashCoordToInteger(coords, hashSized);
  live.set(hashCode, coords);
}

function buildLiveHash(liveCells, hashSized) {
  const live = new Map();
  liveCells.forEach((item) => {
    const x = item[0], y = item[1];
    buildHash([x, y], live, hashSized);
  });
  return live;
}

module.exports = buildLiveHash;
