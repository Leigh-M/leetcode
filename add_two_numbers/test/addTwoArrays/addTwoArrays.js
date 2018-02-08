/** Accepts 2 arrays, reverses each, sums and reverses result again. This implentation only designed
 * for Integers, less than 53 bits
 *
 * @param {array} l1
 * @param {array} l2
 * @return {array}
 */

const addTwoArrays = function addTwoArrays(l1, l2) {
  // Calls rev function on each input array, reverses, joins and returns a string representation
  const rev = (x) => {
    const str = x.reverse().join('');
    return str;
  };
  // parses string of digits returned by rev, base 10 and adds them
  const res1 = parseInt(rev(l1), 10) + parseInt(rev(l2), 10);
  console.log(res1);
  // stringifies, to array and reverses, then translates each string digit in array to an integer
  const tot = (res1.toString().split('')).reverse().map(x => parseInt(x, 10));

  console.log(tot);
  return tot;
};

addTwoArrays([8, 46, 300, 500], [6000, 4, 90000]);

module.exports = addTwoArrays;
