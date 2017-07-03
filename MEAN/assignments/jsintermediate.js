// Part 1

function star_string(v) {
  str = '';
  while (v > 0) {
    str += '*';
    v--;
  }
  return str;
}

let stars = star_string(8);
console.log(stars);

// Part 2
function draw_stars(arr) {
  str = '';
  for (var i = 0; i < arr.length; i++) {
    var x = arr[i];
    while (x > 0) {
      str += '*';
      x--;
    }
    str += '\n';
  }
  return str;
}

let x = [4, 6, 1, 3, 5, 7, 25];

console.log(draw_stars(x));

// Part 3
function draw_stars2(arr) {
  str = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].constructor == Number) {
      var x = arr[i];
      while (x > 0) {
        str += '*';
        x--;
      }
      str += '\n';
    } else {
      var y = arr[i].length;
      var z = arr[i][0].toLowerCase();
      while (y > 0) {
        str += z;
        y--;
      }
      str += '\n';
    }
  }
  return str;
}

let a = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];

console.log(draw_stars2(a));
