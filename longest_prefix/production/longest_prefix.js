/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs === [''] || '' || null || undefined || (strs.length === 0) || (strs[0] === '') || (strs[0] === ['']) || (strs[0].length === 0)) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const arr = strs;
  arr.sort((a, b) => a.length - b.length);
  const Len = arr[0].length;

  let mtchStr = '';

  for (let j = 0; j < Len; j++) {
    for (let i = 1; i < arr.length; i++) {
      if ((i === arr.length - 1) && (arr[0][j] === arr[i][j])) {
        mtchStr += arr[i][j];
      }
      if (arr[0][j] !== arr[i][j]) {
        return mtchStr;
      }
    }
  }
  return mtchStr;
};
