
var http = require('http');
var url = require('url');
/**
 * Name
 * Value
 * Domain
 * Path
 * Expires/Max-Age
 * HTTP
 * Secure
 */
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/favicon.ico'){
        res.end('404');
    }else if(pathname == '/write'){//写入cookie
      res.statusCode = 200;
      res.setHeader('Set-Cookie','name=zfpx');
        res.setHeader('Set-Cookie','age=6');
      res.end('ok');
    }else if(pathname == '/read'){
        //Cookie:name=zfpx2; age=6

        var cookieObj = {};
        res.end(JSON.stringify(cookieObj));
    }
}).listen(8080);