/**
 * Check the 'order' or length of the number base 10, check each first digit matches the
 * last digit, if they do not match return false, if they do, remove them both and check
 * again++ if they all match return true
 *
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  let X = x;
  if (X < 0) { return false; }
  if (X < 10) { return true; }
  // for an integer, the highest order, or length without overflow on base 10 (10 ** i) = 9
  // same as signed integer 2 ** 31
  let i = 9;
  // find the length or 'order' on base 10, if Math.floor is 0, reduce i so 1005/ 10**3 = 1.005
  while (Math.floor(X / (10 ** i)) === 0) {
    i--;
  }

  while (i > 0) {
    // check first digit in num and last digit are the same
    if (Math.floor(X / (10 ** i)) !== (X % 10)) {
      return false;
    }
    // remove first digit
    X %= (10 ** i);
    // remove last digit
    X = Math.floor(X / 10);
    // drop order, ie length of i by two, for the two removed digits
    i -= 2;
  }
  return true;
};
console.log(isPalindrome(2002));

// for testing
module.exports = isPalindrome;
