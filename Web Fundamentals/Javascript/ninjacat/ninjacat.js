$(document).ready(function() {
  $('img[alt="pic0"]').click(function() {
    $(this).attr('src', $(this).attr('src').replace(/cat0/, /ninja0/));
  });
});
