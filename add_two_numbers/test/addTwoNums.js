/**
You are given two non-empty linked lists representing two non-negative integers. The digits are
stored in reverse order and each of their nodes contain a single digit. Add the two numbers and
return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function addTwoNumbers(l1, l2) {
  // Calls rev function on each input ListNode, reverses, joins and returns a string of digits
  const rev = function rev(x) {
    const str = x.reverse().join('');
    return str;
  };
  // parses string of digits returned by rev, base 10 and adds them
  const res1 = parseInt(rev(l1), 10) + parseInt(rev(l2), 10);
  // stringifies, to array and reverses, then translates each string digit in array to an integer
  const tot = (res1.toString().split('')).reverse().map(x => parseInt(x, 10));

  console.log(tot);
  return tot;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);

module.exports = addTwoNumbers;
