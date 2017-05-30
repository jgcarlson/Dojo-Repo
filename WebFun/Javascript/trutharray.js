function bool(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newArr.push(arr[i]);
    } else {
      console.log('invalid arr');
    }
  }
  console.log(newArr);
}

bool([2, 4, 5, 8]);
bool([2, 4, 5, 'eight']);
