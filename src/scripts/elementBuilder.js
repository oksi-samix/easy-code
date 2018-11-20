import $ from 'jquery';

export default (tag = 'div', content = '', className = 'box') => {
    return $(`<${tag}/>`).addClass(className).html(content);
  };

