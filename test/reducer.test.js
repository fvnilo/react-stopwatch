import reducer from 'reducer';

import * as Constants from 'constants';

import { expect } from 'chai';

describe('reducer', () => {
  it('should return a state with an interval when starting timer', () => {
    let startTimerAction = {
      type: Constants.START_TIMER,
      interval: 'interval'
    };

    let newState = reducer(undefined, startTimerAction);

    expect(newState.defaultStartTime).to.equal(30);
    expect(newState.remainingTime).to.equal(30);
    expect(newState.interval).to.equal('interval');
    expect(newState.running).to.be.true;
  });

  it('should decrease the remainingTime when a tick is dispatched', () => {
    let tickAction = {
      type: Constants.TICK
    };

    let newState = reducer({ remainingTime: 30 }, tickAction);

    expect(newState.remainingTime).to.equal(29);
  });

  it('should stop the stopwatch when a stop is dispatched', () => {
    let stopAction = {
      type: Constants.STOP_TIMER
    };

    let newState = reducer({ running: true }, stopAction);

    expect(newState.running).to.be.false;
  });

  it('should reset the remainingTime when a reset is dispatched', () => {
    let resetAction = {
      type: Constants.RESET_TIMER
    };

    let newState = reducer({
      remainingTime: 1,
      defaultStartTime: 30
    }, resetAction);

    expect(newState.remainingTime).to.equal(30);
  });
});
