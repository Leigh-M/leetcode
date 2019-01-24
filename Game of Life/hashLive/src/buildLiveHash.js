const hashKey = require('./hashKey');

function buildHash(coords, live) {
  const hashCode = hashKey(coords);
  live.set(hashCode, { coords });
}

function buildLiveHash(liveCells) {
  const live = new Map();
  liveCells.forEach((item) => {
    const x = item[0], y = item[1];
    buildHash([x, y], live);
  });
  return live;
}

module.exports = buildLiveHash;
