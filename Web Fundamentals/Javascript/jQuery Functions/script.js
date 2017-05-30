$(document).ready(function() {

      var newDiv = $('<div class="container" style="text-align:center"><h1>This is all new stuff</h1></div>')

      /* --- Click --- */
      $('#blue').click(function() {
        $(this).css('background', 'blue');
      });

      /* --- Hide/Show --- */
      $('#hide').click(function() {
        $('#showhidetext').hide();
      });

      $('#show').click(function() {
        $('#showhidetext').show();
      });

      /* --- Slide Up/Down --- */
      $('#up').click(function() {
        $('#updown').slideUp('slow');
      });

      $('#down').click(function() {
        $('#updown').slideDown('slow');
      });

      /* --- Slide Toggle --- */
      $('#slidetoggle').click(function() {
        $('#updowntoggle').slideToggle('slow');
      });

      /* --- Fade Out/In --- */
      $('#in').click(function() {
        $('#fade').fadeIn('slow');
      });

      $('#out').click(function() {
        $('#fade').fadeOut('slow');
      });

      /* --- Add Class --- */
      $('#addclass').click(function() {
        $('#target').addClass("classme");
      });

      /* --- Before/After --- */
      $('#before').click(function() {
        $('#beforeafter').before(newDiv);
      });

      $('#after').click(function() {
        $('#beforeafter').after(newDiv);
      });

      /* --- Append --- */
      $('#append').click(function() {
        $('#thiscontainer').append('<p>You just appended a "p" element.</p>');
      });

      /* --- HTML --- */
      $('#html').click(function() {
        $('#replace').html('<p>This is new HTML.</p>');
      });

      /* --- Attributes --- */
      var type = $('button').attr('id');

      $('#attributes').click(function() {
        $('#attr').html(type);
      });

      /* --- Val --- */
      var val = $('input').val();
      $('#val').click(function() {
        $('#valtext').html(val);
      });

      /* --- Val --- */
      $('#text').click(function() {
        $('p#textme').text('Thank you.');
      });

      /* --- Data --- */
      var obj = {
        one: 'Coding',
        two: 'Dojo'
      }
      $('p').data('data', {
          one: 'Coding',
          two: 'Dojo'
        }
        $('#data').click(function() {
            $('#datacontainer').text(
            });

        });
