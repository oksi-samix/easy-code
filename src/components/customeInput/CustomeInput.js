import React, {Component} from 'react';
// import './customeInput.scss'

class CustomeInput extends Component {
  state = {
    hidden: false,
  };

  changeVal = ({target: {value, name}}) => {
    this.props.changeVal(value, name)
  };

  handleBlur = ({target: {value, name}}) => {
    this.setState({hidden: false});
    //this.props.onLoose(value, name);
  };

  handleClick = (e) => {
    this.setState({hidden: true});
  };

  renderInput = () => {
    const {value, name, textarea} = this.props;
    return (
      <>{
        textarea ? <textarea
            className="textarea"
            name={name}
            type="text"
            value={value}
            onChange={this.changeVal}
            onBlur={this.handleBlur}/>
          :
          <input
            name={name}
            type="text"
            value={value}
            onChange={this.changeVal}
            onBlur={this.handleBlur}
          />
      }</>

    )
  }

  render() {
    const {hidden} = this.state;
    const {value} = this.props;
    return (
      <div>
        {!hidden ? <span onClick={this.handleClick}>{value}</span> :
          this.renderInput()}
      </div>
    );
  }

}

export default CustomeInput;
