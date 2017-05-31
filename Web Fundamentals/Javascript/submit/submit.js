$(document).ready(function() {

  var firstName = document.forms['contact-form']['first-name'].value;
  var lastName = document.forms['contact-form']['last-name'].value;
  var email = document.forms['contact-form']['email'].value;
  var phone = document.forms['contact-form']['phone'].value;
  var form = '<td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>' + phone + '</td>';

  function post() {
    $('tbody').append(form);
  }
});
