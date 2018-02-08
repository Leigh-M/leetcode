function addition(A, B, acc = '', carry = 0) {
  if (!(A.length || B.length || carry)) return acc.replace(/^0+/, '');

  let Carry = carry;
  let Acc = acc;
  // could use bitwise operator  to convert undefined array values to 0
  // Carry += ~~A.pop() + ~~B.pop(); Not as readable, ESLint errors
  const arrVal1 = Number(A.pop()) || 0;
  const arrVal2 = Number(B.pop()) || 0;
  Carry += arrVal1 + arrVal2;

  Acc = (Carry % 10) + Acc;
  Carry = Carry > 9;

  return addition(A, B, Acc, Carry);
}

function sumStrings(a, b) {
  if (a === '0' && b === '0') return '0';
  return addition(a.split(''), b.split(''));
}

console.log(sumStrings('123465656565656', '567777777777777778'));
