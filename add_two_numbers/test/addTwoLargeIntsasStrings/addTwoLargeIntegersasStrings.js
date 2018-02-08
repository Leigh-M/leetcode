// sumStrings reads in two large integers (over 53 bits) as strings, splits to an array
// calls addition and sums them, returns a string representation

const addition = function addition(A, B, acc = '', carry = 0) {
  // /^0+ will remove prepended 0 with empty/ undefined array value, returns acc when cxomplete
  if (!(A.length || B.length || carry)) return acc.replace(/^0+/, '');

  let Carry = carry;
  let Acc = acc;
  // could use bitwise operator  to convert undefined array values to 0
  // Carry += ~~A.pop() + ~~B.pop() sometimes faster but ESLint throws error
  const arrVal1 = Number(A.pop()) || 0;
  const arrVal2 = Number(B.pop()) || 0;
  Carry += arrVal1 + arrVal2;
  // Number + String == String
  Acc = (Carry % 10) + Acc;
  // Boolean operator
  Carry = Carry > 9;

  return addition(A, B, Acc, Carry);
};

const sumStrings = function sumStrings(a, b) {
  if (a === '0' && b === '0') return '0';
  return addition(a.split(''), b.split(''));
};

console.log(sumStrings('4999999999888888887777777', '6999999999888888887777777'));

module.exports = sumStrings;
module.exports = addition;
