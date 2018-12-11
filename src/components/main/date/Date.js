import React from 'react';

export default class Date extends Component {
  state = { time: new Date() };

  componentDidMount() {
    const date = new Date();
    this.interval = setInterval(() => this.setState({ time: date }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    console.log(time);
    return (
      <div>
        Hello!
        {/*{ time }*/}
      </div>

    );
  }
}
