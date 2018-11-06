// task 1

const path = require("path");
const file = path.basename(__filename);
const date = new Date();
console.log(
  "current hours ---> ",date.getHours(),
  "current minutes ---> ",date.getMinutes(),
  "current day ---> ", date.getDate(),
  "current month ---> ",date.getMonth() + 1,
  "current year ---> ",date.getFullYear());
console.log("file", file);


// task 2

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
module.exports = getRandom;

// task 3

const fs = require('fs');

const read = (name, cb) => {
  return new Promise((res, rej) => {
    fs.readFile(name, (err, data) => {
      if (err) return rej(console.log('ERROR ---->', err));
      res(cb(data.toString('utf8')));
    })
  });
};

module.exports = read;
