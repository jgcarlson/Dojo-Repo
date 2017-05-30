function accum(s) {
  s = s.split('');
  s = s.map(function(val) {
    return val.toUpperCase() + val.repeat(s.indexOf(val));
  });
  console.log(s);
}

accum('abcd');
