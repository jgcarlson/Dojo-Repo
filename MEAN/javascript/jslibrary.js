var _ = {
  map: (arr, callback) => {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
  },
  reduce: (arr, callback, memo) => {
    for (var i = 0; i < arr.length; i++) {
      let reduction = callback(memo, arr[i]);
    }
    return reduction;
  },
  find: function(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i]) == true) {
        return arr[i];
      } else {
        return false;
      }
    }
  },
  filter: function(arr, callback) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i]) == true) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },
  reject: function() {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i]) == false) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
 }
