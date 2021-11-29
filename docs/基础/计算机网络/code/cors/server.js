const http = require('http');
http.createServer(function(request, resoponse) {
    console.log('request come', request.url);
}).listen(8887);

console.log('server listing on 8887');