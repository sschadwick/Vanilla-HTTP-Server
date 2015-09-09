'use strict';

var http = require('http');
var server = http.createServer(function(req, res) {

  var path = req.url.split('/');
  if (req.url === '/time') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })

    var d = new Date();
    var time = d.toTimeString();
    var date = d.toLocaleDateString();

    res.write(time + '\n' + date);
    return res.end();
  }

  // var greetUrl = req.url.substring(0, 6); //reads url for /greet
  // var greetName = req.url.substring(7, req.url.length) //parse out name to greet

  if (path[1] === 'greet') {
    if (req.method === 'GET') {

      // /greet GET route
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write('Hello ' + path[2] + '\n');
      res.write('We\'ve been waiting for you');
      return res.end();

    } else if (req.method === 'POST') {

      req.on('data', function(data) {
        var parsed = JSON.parse(data);
        res.writeHead(200, {
          'Content-Type': 'application/json'
        })
        res.write(JSON.stringify({msg: 'hello ' + parsed.name}))
        return res.end();
      });
    }
  }

  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });

  res.write('page not found');
  return res.end();
});


server.listen(3000, function() {
  console.log('server is running on localhost:3000'); //confirm that server is running
});
