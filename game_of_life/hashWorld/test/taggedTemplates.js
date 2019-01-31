/* eslint-env mocha */

// tagged template formatting
const tag1 = (strings, input, expected) => {
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

module.exports = tag1;
