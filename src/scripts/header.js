module.exports = () => {
  const header =
    document.createElement('header');


  header.className = 'header';


  header.innerHTML =
    '<a href="/">Logo</a>';

  return header;
};

