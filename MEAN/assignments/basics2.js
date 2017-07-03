function magic_multiply(x, y) {
  if (x.constructor == Array) {
    for (let int in x) {
      x[int] *= y;
    }
  } else if (x.constructor == String) {
    var str = '';
    while (y > 0) {
      str += x;
      y--;
    }
    return str;
  } else if (isNaN(x * y)) {
    return "Error: Can not multiply by string";
  } else {
    x *= y;
  }
  return x;
}

// Test 1
let test1 = magic_multiply(5, 2);
console.log(test1);

// Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);

// Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

// Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);

// Test 5 - Bonus
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
