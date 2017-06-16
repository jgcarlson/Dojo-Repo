$(document).ready(function() {
  $('.comment-form').hide();

  $('section').on('click', function() {
    $(this).children('form').slideToggle();
    $(this).children('form').children('textarea').on('click', function(e) {
      e.stopPropagation();
    });
  });
});
