const http = require('http');
const requireDir = require('require-dir');
const exportsObject = requireDir(__dirname, { recurse: false });

http.createServer(function (req, res) {  
    res.write(`Hello World!, this moment is: ${exportsObject.myMoment.now}`);  
    res.end();  
}).listen(3000);

console.log('Server running at 3000'); 
