$(document).ready(function() {

  var n1 = '<section class="d-flex d-sm-inline-flex flex-column"><h3 style="display:inherit">';
  var n2 = '</h3><p style="display:none">';
  var n3 = '</p></section>';

  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var description = $('#description').val();
    if (firstName === "" || lastName === "" || description === "") {
      alert('Please complete all fields!');
    } else {
      $('#cards').append(n1 + firstName + ' ' + lastName + n2 + description + n3);
      $(this)[0].reset();
    }
    return false;
  });

  $(document).on('click', 'section', function() {
    var x = $('section > h3').css('display');
    var y = $('section > p').css('display');
    $(this).find('h3').css('display', y);
    $(this).find('p').css('display', x);
    console.log(x);
    console.log(y);
  });



});
