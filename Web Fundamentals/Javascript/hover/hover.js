$(document).ready(function() {
  $('img').hover(function() {
    var these = $(this).attr('src');
    var those = $(this).attr('src-alt');
    $(this).attr('src', those).attr('src-alt', these);
  })
});
