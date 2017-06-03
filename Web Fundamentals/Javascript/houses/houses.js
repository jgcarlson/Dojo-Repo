$(document).ready(function() {
  var x1 = '<h2>';
  var x2 = '</h2><br><h4>Motto: </h4><p>';
  var x3 = '</p><br><h4>Titles: </h4><p>';
  var x4 = '</p><br><h4>Founded: </h4><p>';
  var x5 = '</p><br>';

  $('img').on('click', function() {
    $('img').css({
      'width': '20vw',
      'height': '11vw'
    });
    $(this).css({
      'width': '23vw',
      'height': '14vw'
    });
    var num = $(this).attr('alt');
    $.get('https://anapioficeandfire.com/api/houses/' + num, function(data) {
      var name = data.name;
      var words = data.words;
      var arrTitles = data.titles;
      var titles = "";
      var getTitles = function(arr) {
        for (var i = 0; i < arrTitles.length; i++) {
          titles += '<p>' + arr[i] + '</p>';
        }
        return titles;
      };
      var founded = data.founded;
      $('article').html(
        x1 + name +
        x2 + words +
        x3 + getTitles(arrTitles) +
        x4 + founded +
        x5
      );

    }, 'json');

  });

});
