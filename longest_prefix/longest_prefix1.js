/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs === [''] || '' || null || undefined) {
    console.log('Stops here');
    return '';
  }

  if (strs.length === 1) {
    console.log(`it stops here and has logged something${strs[0]}`);
    return strs[0];
  }

  if (strs.length === 0) {
    console.log('stops here again');
    return '';
  }

  if (strs[0] === '') {
    console.log('stops finally');
    return '';
  }

  if (strs[0] === ['']) {
    console.log('stops finally2');
    return '';
  }

  if (strs[0].length === 0) {
    console.log('stops finally2');
    return '';
  }

  const arr = strs;
  arr.sort((a, b) => a.length - b.length);
  const Len = arr[0].length;

  let mtchStr = '';

  for (let j = 0; j < Len; j++) {
    for (let i = 1; i < arr.length; i++) {
      if ((i === arr.length - 1) && (arr[0][j] === arr[i][j])) {
        mtchStr += arr[i][j];
        console.log(mtchStr);
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

// longestCommonPrefix(['ca', 'ca']);

module.exports = longestCommonPrefix;


// Try: ["a"] or ["c", "c"] or ["abca", "abc"]   [""] = ""    ["a"]
// ["a","a","b"]      ["ab","abc","ab"]     ["aa","ab"]
// ["flower","flow","flight"]
// ["ca","a"]   exp  ""
// ["c", "c"]   exp  "c"
// "abca","aba","aaab"

/*
while  1st char is substr of 2nd + 3rd + 4th + arr.lenth-1   add it to STRmtchd
return (or cons.log) STRmatchd
*/
