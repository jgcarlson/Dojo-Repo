function fib() {
  let counter = 1;

  function nacci() {
    counter += counter;
    console.log(counter);
  }
  return nacci;
}
let fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
