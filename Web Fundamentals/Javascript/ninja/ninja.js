$(document).ready(function() {

  $('img').click(function() {
    $(this).replaceWith('<div class="placeholder"></div>');
  });

  $('button').click(function() {
    $('.placeholder').replaceWith('<img src="ninja.png" alt="ninja" class="img">');
  });

});
