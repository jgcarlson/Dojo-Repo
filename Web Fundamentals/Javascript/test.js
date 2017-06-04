// bubble sort random array

var testArr = [];
for (var i = 1; i < 101; i++) {
  testArr.push(Math.floor(Math.random() * 100));
}

function bubble(arr) {
  var sorted;
  do {
    sorted = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = true;
      }
    }
  } while (sorted);
  console.log(arr);
}

bubble(testArr);
