/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  let X = x;
  if (X < 0) { return false; }
  if (X < 10) { return true; }
  let i = 9;
  while (Math.floor(X / (10 ** i)) === 0) {
    i--;
  }

  while (i > 0) {
    if (Math.floor(X / (10 ** i)) !== (X % 10)) {
      return false;
    }
    X %= (10 ** i);
    X = Math.floor(X / 10);
    i -= 2;
  }
  return true;
};
