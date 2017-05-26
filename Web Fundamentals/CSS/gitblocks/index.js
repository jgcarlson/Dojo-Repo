var arr = [10, 9, 8, 7, 11, 10, 9, 8, 12, 11, 10, 9];
var newArr = [];
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > arr[1]) {
    newArr.push(arr[i]);
    count++;
  }
}
console.log(newArr);
console.log(count);
if (newArr.length == count) {
  console.log('Wow!');
}
