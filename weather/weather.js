const http = require('http');
const fs = require('file-system');

http.get('http://wttr.in/~kharkov', (res) => {
  if (res.statusCode !== 200) throw new Error(res.statusMessage);
  res.setEncoding('utf-8');
  let result = '';
  res.on('data', data => result += data);
  res.on('end', () => {console.log(result); fs.writeFile('weather.html', result)});
});
