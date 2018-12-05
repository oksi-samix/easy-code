import './navigation.scss';

export const Navigation = (props) => (
  const {list} = props;
console.log('>>>', list)
  return (<ul className="main-nav">
    {list.map(item => <li key={item}><a href={`/${item.toLowerCase()}`}>{item}</a></li>)}
  </ul>)
  );
