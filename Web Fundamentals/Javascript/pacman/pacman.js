var world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var loc = {
  x: 30,
  y: 30
};

var pacman = document.getElementById('pacman');

function pos() {
  pacman.css({
    'top': loc.y + 'px',
    'left': loc.x + 'px'
  });
}

pos();

function display() {
  var output = '';
  for (var i = 0; i < world.length; i++) {
    output += '<div class="row">';
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] === 2) {
        output += '<div class="brick"></div>';
      } else if (world[i][j] === 1) {
        output += '<div class="coin"></div>';
      } else {
        output += '<div class="empty"></div>';
      }
    }
    output += '</div>';
  }
  return output;
}

document.getElementById('world').innerHTML = display();
