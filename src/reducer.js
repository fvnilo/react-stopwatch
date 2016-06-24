import * as Constants from 'constants';

const initialState = {
  defaultStartTime: 30,
  remainingTime: 30,
  running: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case Constants.START_TIMER:
    return Object.assign({}, state, {
      interval: action.interval,
      running: true
    });
  case Constants.STOP_TIMER:
    return Object.assign({}, state, {
      running: false
    });
  case Constants.TICK: {
    let remainingTime = state.remainingTime > 0 ? state.remainingTime -1 : 0;

    return Object.assign({}, state, {
      remainingTime,
      running: remainingTime > 0
    });
  }
  case Constants.RESET_TIMER:
    return Object.assign({}, state, {
      remainingTime: state.defaultStartTime,
      interval: null,
      running: false
    });
  default:
    return state;
  }
}
