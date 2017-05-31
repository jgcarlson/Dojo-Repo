$(document).ready(function() {
  $('form').submit(function() {
    var firstName = $('input[name="first-name"]').val();
    var lastName = $('input[name="last-name"]').val();
    var email = $("input[name='email']").val();
    var phone = $('input[name="phone"]').val();
    var form = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>' + phone + '</td></tr>';
    $('tbody').append(form);
    $(this)[0].reset();
    return false;
  });
});
