/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
console.log('Test working');

  if (strs === [''] || '' || null || undefined) {
    return '';
  }

  if (strs.length === 0) {
    return "";
  }

  if (strs[0] === "") {
    return "";
  }
  const arr = strs;
  arr.sort((a, b) => a.length - b.length);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const patt = new RegExp(arr[0]);
    const res = patt.test(str);
    if (res) {
      count += 1;
    } else {
      arr[0] = (arr[0]).slice(0, -1);
      count = 0;
      console.log(arr[0]);
      if (arr[0] === "") {
        console.log('empty string');
        return "";
      }
    }
    if (count === arr[i].length) {    // it's this line?  maybe not i ?  Swap it and others fail
      console.log(arr[0]);
      return arr[0];
    }
  }
};

longestCommonPrefix(["a","b"]);

// Try: ["a"] or ["c", "c"] or ["abca", "abc"]   [""] = ""    ["a"]
// ["a","a","b"]      ["ab","abc","ab"]     ["aa","ab"]     

/*
while  1st char is substr of 2nd + 3rd + 4th + arr.lenth-1   add it to STRmtchd
return (or cons.log) STRmatchd
*/
