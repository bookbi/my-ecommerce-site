var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    //var q = url.parse(req.url, true).query;
    //var txt = q.fname + " " + q.lname;
    var q = url.parse(req.url, true);
    let filePath = "." + q.pathname;
    if(filePath === "./") filePath = "./index.html";

    const extname = path.extname(filePath);
    let contentType = "text/html";
    if(extname === ".css") contentType = "text/css";

  fs.readFile("./index1.html",function req, htmlDoc){}
    
});
  

server.listen(4000);