// spacial hash
function hashKey(coord) {
  const x = coord[0];
  const y = coord[1];
  return `${x},${y}`;
}

module.exports = hashKey;
