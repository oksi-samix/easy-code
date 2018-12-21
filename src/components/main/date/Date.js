import React from 'react';

export default class CustomDate extends Component {
  state = { time: null };

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();
      const time = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
          ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        Hello!
        <br/>
        {time}
      </div>

    );
  }
}
