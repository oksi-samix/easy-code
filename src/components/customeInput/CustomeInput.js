class CustomeInput extends Component {
  state = {
    hidden: false,
    value: 'bla'
  };

  changeVal = ({ target: { value } }) => {
    this.setState({
      value
    });
  };

  handleBlur = ({ target: { value } }) => {
    this.setState({ hidden: false });
    this.props.onLoose(value);
  };

  handleClick = (e) => {
    this.setState({ hidden: true });
  };

  render() {
    const { hidden, value } = this.state;
    return (
      <div>
        {!hidden ? <span onClick={this.handleClick}>{value}</span> :
          <input
            type="text"
            value={value}
            onChange={this.changeVal}
            onBlur={this.handleBlur}
          />}
      </div>
    );
  }

}

export default CustomeInput;
