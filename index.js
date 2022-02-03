#!/usr/bin/env node

const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {


    if (req.url == '/about.html') {
        res.writeHead(200, { 'content-type': 'text/html'})
        fs.createReadStream('about.html').pipe(res);
    } else if (req.url == '/contact-me.html') {
        res.writeHead(200, { 'content-type': 'text/html'})
        fs.createReadStream('contact-me.html').pipe(res);
    } else if (req.url == '/') {
        res.writeHead(200, { 'content-type': 'text/html'})
        fs.createReadStream('index.html').pipe(res);
    } else {
        res.writeHead(404, { 'content-type': 'text/html'})
        fs.createReadStream('404.html').pipe(res);
    }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})