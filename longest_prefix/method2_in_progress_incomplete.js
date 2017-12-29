/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {

  console.log('test');
  
  if (strs === [''] || '' || null || undefined) {
    console.log('Stops here');
    return "";
  }

  if (strs.length === 1) {
    console.log('it stops here and has logged something' + strs[0]);
    return strs[0];
  }

  if (strs.length === 0) {
    console.log('stops here again');
    return "";
  }

  if (strs[0] === "") {
    console.log('stops finally');
    return "";
  }

  if (strs[0] === [""]) {
    console.log('stops finally2');
    return "";
  }

  if ((strs[0]).length === 0) {
    console.log('stops finally2');
    return "";
  }

  const arr = strs;
  arr.sort((a, b) => a.length - b.length);
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i + 1];
    if (str === undefined) {
      str = arr[i];
      i--;
    }
    const patt = new RegExp(/^arr[0]/);
    const res = patt.test(str);
    if (res) {
      count += 1;
    } else {
      arr[0] = (arr[0]).slice(0, -1);
      count = 1;
      console.log(arr[0]);
      if (arr[0] === "") {
        console.log('empty string');
        return "";
      }
    }
    if (count === arr.length) {
      console.log(arr[0]);
      return arr[0];
    }
  }
};

longestCommonPrefix(["c","c"]);

// Try: ["a"] or ["c", "c"] or ["abca", "abc"]   [""] = ""    ["a"]
// ["a","a","b"]      ["ab","abc","ab"]     ["aa","ab"]    
// ["flower","flow","flight"] 
// ["ca","a"]   exp  ""
// ["c", "c"]   exp  "c"
// ["abca","aba","aaab"]


/*
while  1st char is substr of 2nd + 3rd + 4th + arr.lenth-1   add it to STRmtchd
return (or cons.log) STRmatchd
*/
