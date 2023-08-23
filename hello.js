const http = require('http');
const fs = require('fs');
const url = require('url')

const port = process.env.PORT || 5000;

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    if (q.pathname == "/") {
        filename = "./index.html"
    }
    console.log(filename);
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(port)
// console.log("Port listening on " + port);