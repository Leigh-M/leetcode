/* eslint-env mocha */

// tagged template formatting
const tag1 = (strings, input, expected) => {
  const res = expected;
  const str1 = strings[0];
  const str2 = strings[1];
  let tot = '';
  input.forEach((item) => {
    let ar = '';
    item.forEach((currentItem) => {
      ar += `[${currentItem}]`;
      return ar;
    });
    tot += `${ar} `;
    return tot;
  });
  return `${str1}${tot}${str2}${res}`;
};

const tag2 = (strings, cell, expected) => {
  const str1 = strings[0];
  const str2 = strings[1];
  const cellKey = cell;
  const res = expected;
  return `${str1}${cellKey}${str2}${res}`;
};

const tag3 = (strings, cellKey, manyCells) => {
  const str1 = strings[0];
  const str2 = strings[1];
  const cell = cellKey;
  let tot = '';
  manyCells.forEach((item) => {
    tot += `[${item}]`;
    return tot;
  });
  return `${str1}${cell}${str2}${tot}`;
};

const tag4 = (strings, input, expected) => {
  const str = strings[0];
  const str1 = strings[1];
  const str2 = strings[2];
  let tot1 = '';
  input.forEach((item) => {
    tot1 += `[${item}]`;
  });
  let tot2 = '';
  expected.forEach((item) => {
    tot2 += `[${item}]`;
  });
  return `${str}${tot1}${str1}${tot2}${str2}`;
};

module.exports = {
  tag1, tag2, tag3, tag4,
};
