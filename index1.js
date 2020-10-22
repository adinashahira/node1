var http = require("http");
var exec = require('child_process').exec;

http.createServer(function(req, res) {
  exec('uptime', function(err, stdout, stderr) {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.end(stderr);
    }
    else {
      res.writeHead(200,{"Content-Type": "text/plain"});
      res.end(stdout);
    }
  });
}).listen(8000);
console.log('Node server running');
