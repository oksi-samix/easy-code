export const List = (props) => (<ul className="list">

  {props.items.map(el =>
    <li key={el.id}>{el.name}</li>)}

</ul> );
