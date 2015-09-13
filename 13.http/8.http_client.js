/**
 * http 客户端
 *
 **/
var fs = require('fs');
var http = require('http');
var options ={
    host:'localhost',
    port:8080,
    method:'POST',
    path:'/post',
    headers:{name:'china','Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryHkum7PHhF1r4dT5A'}
}
var req = http.request(options,function(res){
    console.log(res.statusCode);
    console.log(res.headers);
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log('响应内容',data);
    })
})
req.on('error',function(err){
    console.error(err);
});
var buf1 = new Buffer('username=zfpx&password=789&file:avatar:gigi.jpg=');
var content = fs.readFileSync('./gigi.jpg');
req.end(Buffer.concat([buf1,content]));
//fs.createReadStream('./form.txt').pipe(req);
//req.end();