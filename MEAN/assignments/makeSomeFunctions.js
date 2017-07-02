function runningLogger() {
  console.log('I am running!');
}

function multiplyByTen(arg) {
  return arg * 10;
}

console.log(multiplyByTen(5));

function stringReturnOne() {
  return 'This is the first string.';
}

function stringReturnTwo() {
  return 'This is the second string.';
}

function caller(arg) {
  if (typeof arg == 'function') {
    return arg;
  }
}

function myDoubleConsoleLog(arg1, arg2) {
  if (typeof arg1 == 'function' && typeof arg2 == 'function') {
    console.log(arg1());
    console.log(arg2());
  }
}

function caller2(arg) {
  console.log('starting');
  if (typeof arg == 'function') {
    setTimeout(function() {
      arg();
    }, 2000);
  }
  console.log('ending?');
  return 'interesting';
}

caller2(myDoubleConsoleLog);
