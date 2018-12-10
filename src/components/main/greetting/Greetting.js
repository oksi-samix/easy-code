const getMsg = (props) => {
  const date = new Date().getHours();

  let msg = '';

  if (date >= 22 || date <= 3) { return msg = `Good night${props.name ? `, ${props.name}` : ''}!`; }
  if (date >= 3 && date <= 12) { return msg = `Good morning${props.name ? `, ${props.name}` : ''}!`; }
  if (date >= 12 && date <= 18) { return msg = `Good afternoon${props.name ? `, ${props.name}` : ''}!`; }
  if (date >= 18 && date <= 22) { return msg = `Good evening${props.name ? `, ${props.name}` : ''}!`; }
  return msg;
};


export const Greetting = props => <div>{getMsg(props)}</div>;
