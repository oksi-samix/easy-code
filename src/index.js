const header = require('./scripts/header');
const footer = require('./scripts/footer');
const main = require('./scripts/main');
const $ = require('jquery');

console.log(header);
$('body').append(header).append(main).append(footer);


