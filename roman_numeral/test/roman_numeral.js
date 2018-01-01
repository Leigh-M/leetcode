/**

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999 = MMMCMXCIX

 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  let Str = String(s);
  console.log(Str);
  let Tot = 0;

  if (Str.indexOf('CM') !== -1) {
    Tot += 900;
    Str = Str.replace('CM', '');
  }

  if (Str.indexOf('MMM') !== -1) {
    Tot += 3000;
    Str = Str.replace('MMM', '');
  }

  if (Str.indexOf('MM') !== -1) {
    Tot += 2000;
    Str = Str.replace('MM', '');
  }

  if (Str.indexOf('M') !== -1) {
    Tot += 1000;
    Str = Str.replace('M', '');
  }

  if (Str.indexOf('CD') !== -1) {
    Tot += 400;
    Str = Str.replace('CD', '');
  }

  if (Str.indexOf('MMM') !== -1) {
    Tot += 3000;
    Str = Str.replace('MMM', '');
  }


  if (Str.indexOf('D') !== -1) {
    Tot += 500;
    Str = Str.replace('D', '');
  }

  if (Str.indexOf('XC') !== -1) {
    Tot += 90;
    Str = Str.replace('XC', '');
  }

  if (Str.indexOf('CCC') !== -1) {
    Tot += 300;
    Str = Str.replace('CCC', '');
  }

  if (Str.indexOf('CC') !== -1) {
    Tot += 200;
    Str = Str.replace('CC', '');
  }

  if (Str.indexOf('C') !== -1) {
    Tot += 100;
    Str = Str.replace('C', '');
  }

  if (Str.indexOf('XL') !== -1) {
    Tot += 40;
    Str = Str.replace('XL', '');
  }

  if (Str.indexOf('L') !== -1) {
    Tot += 50;
    Str = Str.replace('L', '');
  }

  if (Str.indexOf('IX') !== -1) {
    Tot += 9;
    Str = Str.replace('IX', '');
  }

  if (Str.indexOf('XXX') !== -1) {
    Tot += 30;
    Str = Str.replace('XXX', '');
  }

  if (Str.indexOf('XX') !== -1) {
    Tot += 20;
    Str = Str.replace('XX', '');
  }

  if (Str.indexOf('X') !== -1) {
    Tot += 10;
    Str = Str.replace('X', '');
  }

  if (Str.indexOf('IV') !== -1) {
    Tot += 4;
    Str = Str.replace('IV', '');
  }

  if (Str.indexOf('V') !== -1) {
    Tot += 5;
    Str = Str.replace('V', '');
  }

  if (Str.indexOf('III') !== -1) {
    Tot += 3;
    Str = Str.replace('III', '');
  }

  if (Str.indexOf('II') !== -1) {
    Tot += 2;
    Str = Str.replace('II', '');
  }

  if (Str.indexOf('I') !== -1) {
    Tot += 1;
    Str = Str.replace('I', '');
  }

  console.log(Tot);
  return Tot;
};

romanToInt('XXX');

// for testing
module.exports = romanToInt;
