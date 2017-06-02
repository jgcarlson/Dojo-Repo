$(document).ready(function() {

  function cap(word) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    return word;
  }

  cap("wordywords");

  for (var i = 1; i < 152; i++) {
    var poke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    $('section').append('<img src="' + poke + i + '.png" alt="' + i + '">');
  }

  $(document).on('click', 'img', function() {
    var pokeid = $(this).attr('alt');
    $.get('http://pokeapi.co/api/v2/pokemon/' + pokeid + '/', function(data) {
      $('.floater').html('');
      var name = data.name;
      var img = data.sprites.front_default;
      var type = data.types[0].type.name;
      var height = data.height;
      var weight = data.weight;
      $('.floater').append(
        '<h1>' + cap(name) + '</h1>' +
        '<img src="' + img + '">' +
        '<p><span style="font-weight:bold">Type:</span>  ' + cap(type) + '</p>' +
        '<p><span style="font-weight:bold">Height:</span> ' + height / 10 + ' meters</p>' +
        '<p><span style="font-weight:bold">Weight:</span>  ' + weight / 10 + ' kg</p>'
      );
    }, 'json');
  });


});
