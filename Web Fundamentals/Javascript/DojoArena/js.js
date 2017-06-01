
function toBlack() {
  $('body').css('background-color', 'black')
}

$(document).ready(function() {

  var players1 = '<select class="player1"><option selected disabled>Select Ninja</option><option name="leo" value="leo.png">Leonardo</option><option name="donny" value="donny.png">Donatello</option><option name="mikey" value="mikey.png">Michelangelo</option><option name="raphael" value="raphael.png">Raphael</option></select>';
  var players2 = '<select class="player2"><option selected disabled>Select Ninja</option><option name="leo" value="leo.png">Leonardo</option><option name="donny" value="donny.png">Donatello</option><option name="mikey" value="mikey.png">Michelangelo</option><option name="raphael" value="raphael.png">Raphael</option></select>';
  var container2 = '<h2>Select Players</h2>'+players1+players2;

  $('button').hover(
    function() {
      $('body').css('background-image','url('+ $(this).attr('data-alt')+')')
    },
    function() {
      $(this).bind(toBlack());
    })

  $('button').click(function() {
    $(this).unbind(toBlack());
    $('body').css('background-image','url('+ $(this).attr('data-alt')+')')
    $('.container').html(container2)
  })

  $(document).on('change','.player1',
    function() {
      console.log("hi");
      var value = $(this).val();
      console.log(value);
      $('#player1').html('<img src="'+value+'" width="auto" height="250px">')
      });

  $(document).on('change','.player2',
    function() {
      console.log("hi");
      var value = $(this).val();
      console.log(value);
      $('#player2').html('<img src="'+value+'" width="auto" height="250px">')
      });

  })
