import './Button.scss';

export default class Button extends Component {
  state = { className: 'inactive' };

  setButtonState = () => {
    const { className } = this.state;
    this.setState({
      className: className === 'inactive' ? 'active' : 'inactive'
    });
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
