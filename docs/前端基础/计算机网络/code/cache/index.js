const express = require('express');
const CryptoJS = require('crypto-js/crypto-js');
const fs = require('fs');
const app = express();
const options = {
    etag: true, // 开启协商缓存
    lastModified: false,
    setHeaders: (res, path, stat) => {
        const data = fs.readFileSync(path, 'utf-8');
        const hash = CryptoJS.MD5((JSON.stringify(data)));
        res.set({
            'Cache-Control': 'max-age=00', // 浏览器不走强缓存
            'Pragma': 'no-cache',
            'Etag': hash
        });
    }
}
app.use(express.static((__dirname + '/public'), options));
const port = 3003
app.listen(port);
console.log('http://localhost:' + port)