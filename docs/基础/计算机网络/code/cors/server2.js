const http = require('http');
const fs = require('fs');
http.createServer(function(request, response) {
    console.log('request come', request.url);
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHeader(200, {
        'Content-Type': 'text/html'
    });
    response.end(html);
}).listen(8888);

console.log('server listing on 8888');