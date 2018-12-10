export default class Button extends Component{
  // state = { className: 'inactive' };

  constructor(props){
    super(props);

    this.state = {className: 'inactive'}
  }

    setButtonState = () => {
    if(this.state.className === 'inactive'){
      this.setState({
        className: 'active'
      })
    } else {
      this.setState({
        className: 'inactive'
      })
    }
  };

  render() {
    const {setButtonState}= this;
    const {className}= this.state;
    console.log(className);
    return (
      <div>
        <button onClick={setButtonState} className={className}>Component button</button>
      </div>

    )
  }
}
