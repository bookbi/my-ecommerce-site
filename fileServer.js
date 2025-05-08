var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
    //var q = url.parse(req.url, true).query;
    //var txt = q.fname + " " + q.lname;
    var q = url.parse(req.url, true);
    let filePath = "." + q.pathname;
    if(filePath === "./") filePath = "./index.html";

    const extname = path.extname(filePath);
    let contentType = "text/html";
    if(extname === ".css") contentType = "text/css";

  fs.readFile(filePath, function(err, htmlDoc){
    if(err ){
        res.writeHead(404,{'Content-Type':'text/html'});
        return res.end(" 404 File not Found!!!!")
    }
    
  
    res.writeHead(200, {'Content-Type': contentType });
    res.write(htmlDoc)
    res.end();
  });
    
});
  

server.listen(8080);