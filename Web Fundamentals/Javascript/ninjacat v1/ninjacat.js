$('.ninja').hide();

$(document).ready(function() {
  $('img.cat').click(function() {
    $(this).hide();
    $(this).next().show();
  });

  $('img.ninja').click(function() {
    $(this).hide();
    $(this).prev().show();
  });
});
