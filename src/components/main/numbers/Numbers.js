const createList = (props) => {
  const liCreator = item => <li key={item}>{item}</li>;
  const arr = new Array(props.to - props.from + 1).fill().map((_, idx) => props.from + idx);
  if (props.odd) {
    return arr.filter(item => item % 2 === 0).map(item => liCreator(item));
  }
  if (props.even) {
    return arr.filter(item => item % 2 !== 0).map(item => liCreator(item));
  }
  return arr.map(item => liCreator(item));
};

export const Numbers = props => <ul>{createList(props)}</ul>;
