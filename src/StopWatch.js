import React from 'react';

import { observer } from 'mobx-react';

@observer
class StopWatch extends React.Component {
  render() {
    let { timer } = this.props;

    return (
      <div>
        <h1>
          Time Remaining: { timer.timeRemaining }
        </h1>
         <button onClick={timer.start.bind(timer)}>Start</button>
         <button onClick={timer.stop.bind(timer)}>Stop</button>
         <button onClick={timer.reset.bind(timer)}>Reset</button>
      </div>);
  }
}

export default StopWatch;
