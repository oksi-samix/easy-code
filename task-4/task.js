const fs = require('file-system');

const createFolder = () => {
  return new Promise((res) => {
    fs.mkdir('folder', () => {
      res('done')
    });
  });
};

const createFile = () => {
  createFolder()
    .then(() =>{
      fs.writeFile('folder/data.txt', new Date())
    })
}

createFile();
