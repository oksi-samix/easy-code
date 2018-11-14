const $ = require('jquery');

module.exports =
  (tag = 'div', content = '', className = 'box') => {
    console.log($().addClass(className).html(content));
    return $(`<${tag}/>`).addClass(className).html(content);
  };
