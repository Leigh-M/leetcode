## Conways Game of Life - JavaScript / hashed ES2015 Map / Canvas version

### Online demo
To view this version in canvas online goto: http://leighmathieson.com/gameoflifehash

### Design
A 2d array approach runs very slowly in comparison, and involves keeping track of each cell in the matrix for both live and dead cells

Hashed solution references individual cells without the array iterations. It was possible to use 2 approaches, one method being similar to 2d array approach and requires iterating over all cells and tracking each, a better solution is to simply track live cells and the neighbouring cells, and assume any not live (but neighbouring, and not in the current live cells map) are/ were not live

Design is modular, with JavaScript entry point as /src/index.js, which simply builds the neighbouring cells count Map, and applies the logic in life to return new live cells, and a draw function using canvas and requestAnimationFrame for the redraw. The draw funciton itself could be optimized further.

This solution for better testing coverage does not mutate input params but return new ones, further optimizations are possible at the expense of readability and testability

Webpacked output files in /dist folder, index.html and main.js

### tests
Unit tests in Mocha chai

Full 'life()' test with 4 generations of acorn seed

Test coverage: instanbul/ nyc with npm run test

### Hash function:
A 'spacial hash' was used, ie coord, [2,4] -> '2,4' as key in the Map, with an object including the count of neighbouring adjacent cells and initial coords array as value. Coords necessary to compute the next iteration, of adjacent cells, ie x - 1, y - 1, etc for the 8 neighbouring cells. Could do some more testing on hash functions that map to integers for speed. 

Technically could circumvent this step as ES2015 Maps convert arrays-as-keys to string values under the hood, I opted to force the key using my own hash function as may wish to change the hash function to another using prime numbers as part of performance testing for optimization. eg Horner's method and multiply by H = 31 (below) and array length as a large prime number. 

Although this function itself is more expensive than the spacial array conversion, more testing is required with different hash functions to check Map performance with integers as keys versus strings as keys for definitive answer

function hashToInteger(string, arr) {
  let H = 31;
  let total = 0;
  for (let i = 0; i < string.length; ++i) {
    total +=H * total + string.charCodeAt(i);
    total = total % arr.length;
  }
  return parseInt(total);
}

// opted for linear probing over separate chaining for collisions -> next key avail in array
function setKey(str, arry) {
  let key = hashToInteger(str, arry)
  let index = 0;
  // check no collision
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

const myArr = new Array(1000);

// check collision logic
console.log(setKey('ff', myArr));
console.log(setKey('ff', myArr));

// 366
// 367
