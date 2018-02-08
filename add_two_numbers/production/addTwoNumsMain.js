/** Production version, commented version in test folder
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  const arr1 = [];
  const arr2 = [];

  function getArr(ListNode, arr) {
    let lNode = ListNode;
    while (lNode !== null && lNode.val !== null) {
      arr.push(lNode.val);
      lNode = lNode.next;
    }
  }

  getArr(l1, arr1);
  getArr(l2, arr2);

  const rev = (x) => {
    const str = x.reverse().join('');
    return str;
  };
  const revStr1 = rev(arr1);
  const revStr2 = rev(arr2);

  function addition(a, b, acc = '', carry = 0) {
    if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');

    let Carry = carry;
    let Acc = acc;
    Carry += ~~a.pop() + ~~b.pop();
    Acc = (Carry % 10) + Acc;
    Carry = Carry > 9;

    return addition(a, b, Acc, Carry);
  }

  function sumStrings(a, b) {
    if (a === '0' && b === '0') return '0';
    return addition(a.split(''), b.split(''));
  }
  return (sumStrings(revStr1, revStr2).split('').reverse().map(x => parseInt(x, 10)));
};
