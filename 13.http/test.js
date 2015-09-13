var fs = require('fs');
var c1 = fs.readFileSync('./gigi.jpg','base64');
var c2 = fs.readFileSync('./upload/gigi.jpg','base64');
console.log(c1);
console.log(c2);
console.log(c1 == c2);