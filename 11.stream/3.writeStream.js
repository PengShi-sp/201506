/**
 * 写入流
 **/
var fs = require('fs');
/*
var out = fs.createWriteStream('./write.txt');

for(var i=0;i<1024*1000;i++){
    var flag = out.write(i.toString());
    console.log(flag);
}
out.on('drain',function(){
    console.log('缓存区全部输出');
});*/

/*var out = fs.createWriteStream('./write2.txt');
out.on('error',function(err){
    console.log(err);
});
out.write('123');//写入
out.end('456');//写入并关闭文件
out.write('789');//*/

