import React from 'react';
import { render } from 'react-dom';
import interval from '../../lib/index';

const element = document.createElement('div');
document.body.appendChild(element);

class App extends React.Component {
  state = {
    number: 1
  };
  componentDidMount() {
    this.timer = interval(() => {
      if (this.state.number % 5 === 0) {
        alert(
          `number is: ${this.state.number}, You can wait for seconds then click [OK] to continue.`
        );
      }
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    typeof this.timer === 'function' && this.timer();
  }
  render() {
    return (
      <div>
        <h3>
          确保interval执行的每次间隔时间相同, 即使是线程被阻塞
        </h3>
        <p>数字每秒+=1, 每隔5个阻塞一次线程</p>
        {this.state.number}
      </div>
    );
  }
}

render(<App />, element);
