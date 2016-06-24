import * as Actions from 'actions';
import { expect } from 'chai';

import sinon from 'sinon';

describe('actions', () => {
  let clock = sinon.useFakeTimers();

  afterEach(() => {
    clock.restore();
  });

  describe('startTimer', () => {
    it('should dispatch a TICK action every second when timer is running', () => {
      let fakeDispatch = sinon.spy();
      let getStateStub = sinon.stub();

      getStateStub.onFirstCall().returns({ running: true });

      Actions.startTimer()(fakeDispatch, getStateStub);

      clock.tick(1000);

      let startTimerCallArg = fakeDispatch.firstCall.args[0];
      let tickTimerCallArg = fakeDispatch.secondCall.args[0];

      expect(startTimerCallArg.type).to.equal('START_TIMER');
      expect(tickTimerCallArg.type).to.equal('TICK');
    });
  });

  describe('stopTimer', () => {
    it('should stop dispatching TICK actions', (done) => {
      let fakeDispatch = action => {
        let stopTimerAction = Actions.stopTimer(action.interval);


        expect(stopTimerAction.type).to.equal('STOP_TIMER');

        done();
      };
      let getStateStub = sinon.stub();

      getStateStub.onFirstCall().returns({ running: true });

      Actions.startTimer()(fakeDispatch, getStateStub);
    });
  });
});
