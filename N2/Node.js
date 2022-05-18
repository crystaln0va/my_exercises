var http = require('http');
var dt = require('./myModule');
http.createServer(function (req, res) {
    res.write("The date and time are currently: " + dt.myDate());
    res.end();
}).listen(8080, () => console.log('starting 8080'));