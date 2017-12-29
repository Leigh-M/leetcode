/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let arr = x.toString().split('');
  arr.reverse();
  if (arr.includes('-') === true) {
    arr.pop();
    arr.unshift('-');
  }

  arr = parseInt(arr.join(''), 10);
  if ((Math.abs(arr)) > 2 ** 31) {
    return 0;
  }
  console.log(arr);
  return arr;
};

reverse(209);

module.exports = reverse;
