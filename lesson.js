const http = require('http');
const fs = require('fs');

const server = http.createServer(
  (req, res) => {
    const isHtml = req.url.includes('.html');
    const fileName = req.url.replace('/', '');
    if(isHtml){
      fs.readFile(fileName, (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        if(err) return res.end('<strong>Error</strong>');
        res.end(data.toString())
      })
      return
    }
    fs.readFile(fileName, (err, data) => {
      res.setHeader('Content-Type', 'text/html');
      if(err) return res.end('<strong>Error</strong>');
      res.end(data)
    })
  });

server.listen(5600);

