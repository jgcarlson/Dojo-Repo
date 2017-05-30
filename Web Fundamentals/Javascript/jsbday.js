var daysUntilMyBirthday = 60;

function bday() {
  for (var i = daysUntilMyBirthday; i >= 0; i--) {
    if (i === 0) {
      console.log('happy birthday');
    } else if (i < 6) {
      console.log('almost there, ' + i + ' more days');
    } else {
      console.log('still ' + i + 'more days');
    }
  }
}

bday();
