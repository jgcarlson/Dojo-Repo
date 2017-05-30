$(document).ready(function() {

  for (var i = 0; i < 12; i++) {
    $('body').append('<div class="container"></div>');
  }

  $('#blue').click(function() {
    $(this).css('background', 'blue');
  });

});
