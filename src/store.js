import { createMobxStore } from 'utils';

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
      timeRemaining: 10
    },
    {
      stop() {
        if (intervalToken) {
          clearInterval(intervalToken);
          intervalToken = null;
        }
      },

      start() {
        let self = this;

        if (!intervalToken) {
          intervalToken = setInterval(function() {
            tick(self);
          }, 1000);
        }
      },

      reset() {
        this.timeRemaining = 10;
      }
    });
}
