// spacial hash
function hashKey(coord) {
  const x = coord[0];
  const y = coord[1];
  return `${x},${y}`;
}

// hash the spacial hash using Horner's number, 31
function hashToInteger(string, arr) {
  const H = 31;
  let total = 0;
  for (let i = 0; i < string.length; ++i) {
    total += (H * total) + string.charCodeAt(i);
    total %= arr.length;
  }
  return parseInt(total, 10);
}

// opted for linear probing over separate chaining for collisions, next key avail in array
function hashCoordToInt(coord, arr) {
  const arry = arr;
  const strKey = hashKey(coord);
  let key = hashToInteger(strKey, arry);
  if (arry[key] === undefined) {
    arry[key] = key;
  } else {
    while (arry[key] !== undefined) {
      key++;
    }
    arry[key] = key;
  }
  return key;
}

module.exports = hashCoordToInt;
