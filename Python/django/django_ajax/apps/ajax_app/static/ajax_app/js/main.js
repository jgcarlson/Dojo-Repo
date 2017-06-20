$(document).ready(function() {
  $('button').on('click', function() {
    $.get('index.html', function(data) {
      $('#server-response').innerhtml(data);
      alert('Response/request completed.');
    });
  });
});
