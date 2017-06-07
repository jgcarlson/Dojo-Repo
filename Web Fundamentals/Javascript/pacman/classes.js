/*
  # GHOST COORDS EX:
  # var ghost1 = {
  # x: 13,
  # y: 6
  # }
*/

function displayGhost1() {
  document.getElementById('ghost1').style.top = ghost1.y * 30 + 'px';
  document.getElementById('ghost1').style.left = ghost1.x * 30 + 'px';
}

class Ghost {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
