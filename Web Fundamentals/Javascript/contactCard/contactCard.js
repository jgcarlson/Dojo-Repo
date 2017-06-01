$(document).ready(function() {

  var n1 = '<section class="d-flex d-sm-inline-flex flex-column"><h3>';
  var n2 = '</h3><p>';
  var n3 = '</p></section>';

  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var description = $('#description').val();
    $('#cards').append(n1 + firstName + ' ' + lastName + n2 + description + n3);
    $(this)[0].reset();
    return false;
  });



});
