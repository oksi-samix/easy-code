const http = require('http');
const fs = require('fs');

const server = http.createServer(
  (req, res) => {
    const isHtml = req.url.includes('.html');
    const isJs = req.url.includes('.js');
    const fileName = req.url.replace('/', '');

if(isHtml){
      fs.readFile(`front-end/${fileName}`, (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        if(err) return res.end('<strong>Error</strong>');
        const date = `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`
        res.end(data.toString().replace('</a>',`</a><footer>${date}</footer>`))
})
      return
    }

if(isJs){
	fs.readFile(`front-end/${fileName}`, (err, data) => {
		res.setHeader('Content-Type', 'application/javascript');
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

server.listen(5600, () => console.log('server started from npm'));

