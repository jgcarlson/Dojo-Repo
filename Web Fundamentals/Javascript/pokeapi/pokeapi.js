$(document).ready(function() {

  for (var i = 1; i < 152; i++) {
    var poke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    $('section').append('<img src="' + poke + i + '.png" alt="img' + i + '">');
  }
});
