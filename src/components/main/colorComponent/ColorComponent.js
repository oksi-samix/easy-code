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
    }), this.setColor);
  };

  setColor = () => {
    const { counter } = this.state;
    if (counter % 15 === 0) {
      return this.setState({ color: 'red' });
    }
    if (counter % 3 === 0) {
      return this.setState({ color: 'green' });
    }
    if (counter % 5 === 0) {
      return this.setState({ color: 'blue' });
    }
    return this.setState({ color: 'grey' });
  };

  render() {
    const { counter, color } = this.state;
    const { handleClick } = this;
    return (
      <div>
        <button onClick={handleClick}>Inc</button>
        <span className="count-text">{counter}</span>
        <br/><br/>
        <Mount code={counter} color={color} />
      </div>
    );
  }
};

export default ColorComponent;
