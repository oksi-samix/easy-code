const createList = (props) => {
  const arr = new Array(props.to - props.from + 1).fill().map((_, idx) => props.from + idx);
  if (props.odd) {
    return arr.filter(item => item % 2 === 0).map(item => <li key={item}>{item}</li>);
  }
  if (props.even) {
    return arr.filter(item => item % 2 !== 0).map(item => <li key={item}>{item}</li>);
  }
  return arr.map(item => <li key={item}>{item}</li>);
};

export const Numbers = props => <ul>{createList(props)}</ul>;
