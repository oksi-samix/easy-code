import './navigation.scss';

export const Navigation = (props) => {
  const { list } = props;
  return (
    <ul className="main-nav">
      {list.map(item => <li key={item}><a href={`/${item.toLowerCase()}`}>{item}</a></li>)}
    </ul>
  );
};
