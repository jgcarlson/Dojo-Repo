/* Double over 30 days */
var money = 0.01;

for (var i = 1; i < 31; i++) {
  money *= 2;
}

console.log('The guy would have $' + money);

/* Double to 10k */
money = 0.01;
var days = 1;

while (money <= 10000) {
  money *= 2;
  days++;
}

console.log('10k in ' + days + 'days');

/* Double to a billion */
money = 0.01;
days = 1;

while (money <= 1000000000) {
  money *= 2;
  days++;
}

console.log(days + ' days to a billion');

/* Double to infinity */
money = 0.01;
days = 1;

while (money < Infinity) {
  money *= 2;
  days++;
}

console.log('all the money in ' + days + ' days');
