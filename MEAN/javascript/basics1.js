// Basics 1

var x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
console.log(x);
x.pop();
console.log(x);

// Basics 2
const y = [];
y.push(88);
console.log(y);

// Basics 3
var z = [9, 10, 6, 5, -1, 20, 13, 2];
for (let i = 0; i < z.length; i++) {
  console.log(z[i]);
}
for (let i = 0; i < z.length - 1; i++) {
  console.log(z[i]);
}

// Basics 4

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i = 0; i < names.length; i++) {
  console.log(names[i].length);
}
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i = 0; i < names.length; i++) {
  if (names[i].length == 5) {
    console.log(names[i]);
  }
}

// Basics 5

function yell(string) {
  return string.toUpperCase();
}

console.log(yell('this is a string'));
