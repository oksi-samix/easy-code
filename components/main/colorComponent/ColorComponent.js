import React from 'react';
import { Mount } from './Mount';

class ColorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: 'grey'
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    const { counter } = this.state;
    const { handleClick } = this;
    return (
      <div>
        <button onClick={handleClick}>Inc</button>
        <span className="count-text">{counter}</span>
        <br/><br/>
        <Mount code={counter} />
      </div>
    );
  }
};

export default ColorComponent;
