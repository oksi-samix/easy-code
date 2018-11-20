import builder from './elementBuilder';
const data = new Date();
const content = `
<main>
<h1>Заголовок на вольную тему</h1>
<strong>Data : ${data.getDate()}/${data.getMonth() +1 }/${data.getFullYear()}</strong>
</main>
`;

export default builder('main', content, 'main');