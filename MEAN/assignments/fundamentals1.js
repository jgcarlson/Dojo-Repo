x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];

x.push(100);

x.push(["hello", "world", "JavaScript is Fun"]);

for (var each in x) {
  console.log(x[each]);
}

console.log(x);

var sum = 0;
for (var i = 1; i < 501; i++) {
  sum += i;
}

console.log(sum);

function findMin(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var min = arr[0];
    for (var i = 1; i < arr.length - 1; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
}

console.log(findMin([1, 5, 90, 25, -3, 0]));

function avgArray(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  var avg = sum / arr.length;
  return avg;
}

console.log(avgArray([1, 5, 90, 25, -3, 0]));

var newNinja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript', //like that's even a question!
  dojo: 'Dallas'
};


// console.log(Object.entries(newNinja))
for (var key of newNinja) {
  console.log(key);
}
