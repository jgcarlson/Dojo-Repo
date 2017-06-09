// $SCRIPT_ROOT = {{ request.script_root | tojson | safe }};
$(document).ready(function() {
  $(document).on('click', 'button', function() {
    $.ajax($SCRIPT_ROOT + '/', {
      donatello: $('button[name="donatello"]'),
      leonardo: $('button[name="leonardo"]'),
      michelangelo: $('button[name="michelangelo"]'),
      raphael: $('button[name="raphael"]')
    }, function() {
      $("img").attr("src");
    });
    return false;
  });
});
