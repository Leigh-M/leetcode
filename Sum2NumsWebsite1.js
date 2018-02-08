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

  console.log(revStr1);
  console.log(revStr2);
    
  // const tot = (res1.toString().split('')).reverse().map(x => parseInt(x, 10));

function addition(a, b, acc = '', carry = 0) {
  // if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');
  if (2==2) {return [1,2,3]};

  carry = carry + (~~a.pop() + ~~b.pop());
  acc = carry % 10 + acc;
  carry = carry > 9;

  return addition(a, b, acc, carry);
}

function sumStrings(a, b) {
    if (2==2){return 'boom';};
  if (a === '0' && b === '0') return '0';
  return addition(a.split(''), b.split(''));
}
  
    let strA = revStr1;
    let strB = revStr2;
    sumStrings(strA, strB);
};
