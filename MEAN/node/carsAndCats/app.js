var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
  console.log('client request URL: ', request.url);
  if (request.url === '/cars') {
    fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cats") {
    fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {
        'Content-type': 'text/html'
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cars/new") {
    fs.readFile('views/cars/new.html', 'utf8', function(errors, contents) {
      response.writeHead(200, {
        'Content-type': 'text/html'
      });
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
   });
  } else if(request.url === '/images/cars1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  } else if(request.url === '/images/cars2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  } else if(request.url === '/images/cars3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cars3.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  } else if(request.url === '/images/cats1.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats1.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  } else if(request.url === '/images/cats2.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  } else if(request.url === '/images/cats3.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats3.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
  } else {
    response.end('File not found!!!');
  }
});
server.listen(6789);
console.log("Running in localhost at port 6789");
