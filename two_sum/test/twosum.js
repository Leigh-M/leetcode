/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// accepts an array of numbers as first arg and target number as second
// if target feasible by sum of two values in input array return
// the two indexes

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if ((nums[i] + nums[j] === target) && (i !== j)) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([2, 4, 7, 9], 11));

// for testing
module.exports = twoSum;
