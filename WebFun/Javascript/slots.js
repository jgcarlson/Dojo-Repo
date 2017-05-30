function slots(quarters) {
  for (var i = quarters; quarters > 0; quarters--) {
    var chance = Math.floor((Math.random() * 100)) + 1;
    if (chance === 1) {
      quarters += Math.floor(Math.random() * 50) + 51;
    }
    console.log(quarters);
  }
  console.log(quarters);
}

slots(20);
