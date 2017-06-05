/* ----- WORLD ----- */

var world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2],
  [2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 0, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
  [2, 1, 2, 2, 0, 2, 1, 2, 2, 2, 2, 1, 2, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

function displayWorld() {
  var output = '';
  for (var i = 0; i < world.length; i++) {
    output += '<div class="row">';
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] === 2) {
        output += '<div class="brick"></div>';
      } else if (world[i][j] === 1) {
        output += '<div class="coin"></div>';
      } else if (world[i][j] === 0) {
        output += '<div class="empty"></div>';
      }
    }
    output += '</div>';
  }
  return output;
}

document.getElementById('world').innerHTML = displayWorld();

/* ----- PACMAN ----- */

var pacman = {
  x: 4,
  y: 6
};

function displayPacman() {
  document.getElementById('pacman').style.top = pacman.y * 30 + 'px';
  document.getElementById('pacman').style.left = pacman.x * 30 + 'px';
}

displayPacman();

document.onkeydown = function(e) {
  if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
    pacman.x -= 1;
  } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
    pacman.y -= 1;
  } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
    pacman.x += 1;
  } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
    pacman.y += 1;
  }
  if (world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
    displayWorld();
  }
  displayPacman();

};

/* ----- GHOSTS ----- */

var ghost1 = {
  x: 13,
  y: 6
};

function displayGhost1() {
  document.getElementById('ghost1').style.top = ghost1.y * 30 + 'px';
  document.getElementById('ghost1').style.left = ghost1.x * 30 + 'px';
}

var ghost2 = {
  x: 14,
  y: 6
};

function displayGhost2() {
  document.getElementById('ghost2').style.top = ghost2.y * 30 + 'px';
  document.getElementById('ghost2').style.left = ghost2.x * 30 + 'px';
}

var ghost3 = {
  x: 15,
  y: 6
};

function displayGhost3() {
  document.getElementById('ghost3').style.top = ghost3.y * 30 + 'px';
  document.getElementById('ghost3').style.left = ghost3.x * 30 + 'px';
}

displayGhost1();
displayGhost2();
displayGhost3();





// left arrow: 37
// up arrow: 38
// right arrow: 39
// down arrow: 40
