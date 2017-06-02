$(document).ready(function() {

  function cap(word) {
    word = word.split('');
    console.log(word);
  }

  cap('string');

  for (var i = 1; i < 152; i++) {
    var poke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    $('section').append('<img src="' + poke + i + '.png" alt="' + i + '">');
  }

  $(document).on('click', 'img', function() {
    var pokeid = $(this).attr('alt');
    $.get('http://pokeapi.co/api/v2/pokemon/' + pokeid + '/', function(data) {
      var name = data.name;
      console.log(name)
      $('.floater').append(





      );
    }, 'json');
  });


});
