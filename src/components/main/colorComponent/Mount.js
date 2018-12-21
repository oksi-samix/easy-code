export const Mount = (props) => {
  const setColor = () => {
    const { code } = props;
    if (code === 0) {
      return 'grey';
    }
    if (code % 15 === 0) {
      return 'red';
    }
    if (code % 3 === 0) {
      return 'green';
    }
    if (code % 5 === 0) {
      return 'blue';
    }
    return 'grey';
  };

  return (
    <div style={{ background: setColor() }}>
      <code id="mount">
        <span>
          The code from props is {props.code}<br/>
        </span>
      </code>
    </div>
  );
};
