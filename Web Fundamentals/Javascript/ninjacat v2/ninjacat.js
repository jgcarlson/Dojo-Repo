$(document).ready(function() {
  $('img').click(function() {
    var these = $(this).attr('src');
    var those = $(this).attr('data-alt');
    $(this).attr('src', those).attr('data-alt', these);
  });
});
