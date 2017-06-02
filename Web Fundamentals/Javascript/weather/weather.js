// API KEY: 9b1ab16e03adedd1d6727ba7e65aa118

$(document).ready(function() {
  console.log("hello")
  $(document).on('submit', 'form', function() {
    var loc = $('input').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + loc + '&APPID=9b1ab16e03adedd1d6727ba7e65aa118&units=imperial', function(data) {
      var temp = data.main.temp;
      $('section').append(
        'It is currently ' +
        temp +
        ' degrees in ' +
        loc +
        '.'
      )
    }, 'json');
    return false;
  });

});

//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

//'https://api.openweathermap.org/data/2.5/weather?q=' + loc + 'London&APPID=9b1ab16e03adedd1d6727ba7e65aa118'
