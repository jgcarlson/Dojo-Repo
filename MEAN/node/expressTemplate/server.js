var express = require('express');
var app = express();
app.get('/', function(request, response) {
  response.send('<h1>Hello Express</h1>');
});
app.listen(5000, function() {
  console.log('Listening on port 5000.');
});
app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');


app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
