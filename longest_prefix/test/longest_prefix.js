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

  // sort the array of strings by length, find the shortest string that is the max character match length

  const arr = strs;
  arr.sort((a, b) => a.length - b.length);
  const Len = arr[0].length;

  let mtchStr = '';

  // cycle through twice, i is current input string from the array of strings, j is the character
  // in each array; i is second loop below, to check a single character in the array then check
  // contained in consecutive arrays

  // if it hits the last array and that character in the last array matches the same character in
  // the first array all have matched and that is the new longest prefix match

  for (let j = 0; j < Len; j++) {
    for (let i = 1; i < arr.length; i++) {
      if ((i === arr.length - 1) && (arr[0][j] === arr[i][j])) {
        mtchStr += arr[i][j];
        // console.log(mtchStr);
      }
      if (arr[0][j] !== arr[i][j]) {
        console.log(mtchStr);
        return mtchStr;
      }
    }
  }

  console.log(mtchStr);
  return mtchStr;
};

longestCommonPrefix(['abcde', 'abccde', 'abcdghf']);

module.exports = longestCommonPrefix;
