$(document).ready(function() {

  $('img').click(function() {
    $(this).fadeTo(1000, 0);
  });

  $('button').click(function() {
    $('img').fadeTo(1000, 1);
  });

});
