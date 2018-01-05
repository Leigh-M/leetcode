/**
 * Accepts an array of strings, returns the longest common prefix match
 * V2 works in reverse from V1: sort the array, check for a match of the shortest entry in the
 * array in each consecutive string sliced at that length, if not a match, slice a character
 * less and loop--
 *
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if (!strs || (strs.length === 0)) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const arr = strs;
  arr.sort((a, b) => a.length - b.length);
  const Len = arr[0].length;
  let mtchstr = '';

  for (let j = (Len - 1); j > -1; j--) {
    for (let i = 1; i < (arr.length); i++) {
      if (arr[0].slice(0, (j + 1)) !== (arr[i]).slice(0, (j + 1))) {
        console.log(`No match at length ${j}`);
        break;
      }
      if (i === (arr.length - 1) && ((arr[0]).slice(0, (j + 1)) === (arr[arr.length - 1]).slice(0, (j + 1)))) {
        mtchstr += (arr[0].slice(0, (j + 1)));
        console.log(mtchstr);
        return mtchstr;
      }
    }
  }
  return mtchstr;
};

longestCommonPrefix(["abca","abc"]);

module.exports = longestCommonPrefix;
