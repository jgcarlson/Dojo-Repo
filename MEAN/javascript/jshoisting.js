// 1.
var hello;
console.log(hello);
hello = 'world';

// 2.

var needle;

function test() {
  needle = 'magnet';
  console.log(needle);
}
needle = 'haystack';
test();

// 3.

var brendan;
brendan = 'super cool';

function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

// 4.

var food;
food = 'chicken';
console.log(food);

function eat() {
  var food;
  food = 'half-chicken';
  console.log(food);
  food = 'gone';
}
eat();

// 5.

var mean;
console.log(food);
mean = function() {
  var food;
  food = "chicken";
  console.log(food);
  food = "fish";
  console.log(food);
};
console.log(food);
mean();

// 6.
var genre;
console.log(genre);
genre = 'disco';

function rewind() {
  var genre;
  genre = 'rock';
  console.log(genre);
  genre = 'r&b';
  console.log(genre);
}
console.log(genre);

rewind();

// 7.

dojo = 'san jose';
console.log(dojo);

function learn() {
  var dojo;
  dojo = 'seattle';
  console.log(dojo);
  dojo = 'burbank';
  console.log(dojo);
}
console.log(dojo);

learn();
