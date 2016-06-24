import * as Constants from 'constants';

const ONE_SECOND = 1000;

export function tick(){
  return {
    type: Constants.TICK
  };
}

export function startTimer() {
  return (dispatch, getState) => {
    let interval = setInterval(() => {
      let state = getState();

      if (state.running) {
        dispatch(tick());
      } else {
        dispatch(stopTimer(interval));
      }
    }, ONE_SECOND);

    dispatch({
      type: Constants.START_TIMER,
      interval
    });
  };
}

export function stopTimer(interval) {
  clearInterval(interval);

  return {
    type: Constants.STOP_TIMER
  };
}

export function resetTimer() {
  return {
    type: Constants.RESET_TIMER
  };
}
