var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function time(HOUR, MINUTE, PERIOD) {
  var ba = '';
  var ampm = '';
  if (MINUTE > 30) {
    ba = 'almost';
    HOUR += 1;
  } else {
    ba = 'just after';
  }
  if (PERIOD === 'AM') {
    ampm = 'in the morning';
  } else {
    ampm = 'in the evening';
  }
  console.log('It\'s ' + ba + ' ' + HOUR + ' ' + ampm + '!');
}

time(8, 50, "AM");
