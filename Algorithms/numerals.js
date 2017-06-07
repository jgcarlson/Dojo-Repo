/*
### Given a positive integer less than 4000, return a string containing
### that value in Roman numeral representation. In this representation,
### I is 1, V is 5, X is 10, L is 50, C is 100, D is 500, and M is 1000.
### Remember that 4 is IV, 349 is CCCXLIX, and 444 is CDXLIV.

### Complete in less than 45 lines. Use less than 13 conditionals
*/

// create string of numbers and use patterns to build roman numeral string

function numerize(num) {
  var numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var str = '';
  for (var i = 0; i < numArr.length; i++) {
    while (num % numArr[i] < num) {
      str += rom[i];
      num -= numArr[i];
    }
  }
  console.log(str);
}
numerize(1);
numerize(99);
numerize(289);
numerize(1999);
numerize(3999);
