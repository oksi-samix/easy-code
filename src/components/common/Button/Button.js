import './Button.scss';

export default class Button extends Component {
  state = { className: 'inactive' };

  setButtonState = () => {
    const { className } = this.state;
    if (className === 'inactive') {
      this.setState({
        className: 'active'
      });
    } else {
      this.setState({
        className: 'inactive'
      });
    }
  };

  render() {
    const { setButtonState } = this;
    const { className } = this.state;
    return (
      <div>
        <button onClick={setButtonState} className={className}>Component button</button>
      </div>

    );
  }
}
