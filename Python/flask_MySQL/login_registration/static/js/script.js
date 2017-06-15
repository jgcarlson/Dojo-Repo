$(document).ready(function() {

  $('.comment-form').hide();

  $(document).on('change', 'section', function() {
    $(this).slideToggle();
  });
});
