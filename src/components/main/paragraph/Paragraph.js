export default class Paragraph extends Component {
  state = { show: false };

  handleClick = () => {
    this.setState((previousState) => {
      return { show: !previousState.show };
    });
  };

  render() {
    const { handleClick } = this;
    const { show } = this.state;
    const { text } = this.props;
    return (
      <div>
        <button onClick={handleClick}>Show text</button>
        {show && <p>{text}</p>}
      </div>

    );
  }
}
