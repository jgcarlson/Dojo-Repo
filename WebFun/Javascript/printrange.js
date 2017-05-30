function printRange(x, y, z) {
  if (z === undefined || z === 0) {
    z = 1;
    for (var i = x; i < y; i += z) {
      console.log(i);
    }
  } else {
    for (var i = x; i < y; i += z) {
      console.log(i);
    }
  }
}

printRange(2, 10, 2);
printRange(-10, 2, 3);
printRange(2, 10);
