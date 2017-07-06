// Math 1
function zero_negativity(arr) {
  var min = Math.min.apply(null, arr);
  return !(min < 0);
}

console.log(zero_negativity([0, 1, 2, 3, 4, 5, 6]));
console.log(zero_negativity([-2, -1, 0, 1, 2, 3, 4, 5, 6]));

// Math 2

function is_even(val) {
  return (val % 2 == 0);
}

console.log(is_even(2));
console.log(is_even(5));

// Math 3

function how_many_even(arr) {
  count = 0;
  for (var int in arr) {
    if (is_even(int)) {
      count++;
    }
  }
  return count;
}

console.log(how_many_even([-2, -1, 0, 1, 2, 3, 4, 5, 6]));

// Math 4
function create_dummy_array(val) {
  arr = [];
  while (val > 0) {
    arr.push(Math.floor(Math.random() * 10));
    val--;
  }
  return arr;
}

console.log(create_dummy_array(10));

// Math 5

function random_choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(random_choice([-2, -1, 0, 1, 2, 3, 4, 5, 6]));
