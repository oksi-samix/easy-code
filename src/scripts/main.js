const builder = require('./elementBuilder');
const data = new Date();
const content = `
<main>
<h1>Заголовок на вольную тему</h1>
<strong>Data : ${data.getDate()}/${data.getMonth() +1 }/${data.getFullYear()}</strong>
</main>
`;

module.exports = builder(
  'main', content, 'main'
);