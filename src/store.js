import { action } from 'mobx';
import { createMobxStore } from 'mobx-noclass';

const tick = store => {
  store.timeRemaining--;

  if (store.timeRemaining === 0) {
    store.stop();
  }
};

export default function storeFactory() {
  let intervalToken = null;

  return createMobxStore(
    {
      timeRemaining: 10,

      elapsed() {
        return 10 - this.timeRemaining;
      }
    },
    {
      @action
      stop() {
        if (intervalToken) {
          clearInterval(intervalToken);
          intervalToken = null;
        }
      },

      @action
      start() {
        let self = this;

        const tickAction = action(() => tick(self));

        if (!intervalToken) {
          intervalToken = setInterval(tickAction, 1000);
        }
      },

      @action
      reset() {
        this.timeRemaining = 10;
      }
    });
}
