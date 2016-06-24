import React, { PropTypes } from 'react';

const StopWatch = ({ remainingTime, interval, actions }) => (
  <div>
    <h1>
      Time Remaining: {remainingTime}
    </h1>
    <button onClick={actions.startTimer}>Start</button>
    <button onClick={() => actions.stopTimer(interval)}>Stop</button>
    <button onClick={actions.resetTimer}>Reset</button>
  </div>);

StopWatch.propTypes = {
  remainingTime: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default StopWatch;
