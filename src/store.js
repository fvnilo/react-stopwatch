import { observable } from 'mobx';

export default class Store {
  _intervalToken = null;

  @observable timeRemaining = 10;

  tick() {
    this.timeRemaining--;

    if (this.timeRemaining === 0) {
      this.stop();
    }
  }

  stop() {
    if (this._intervalToken) {
      clearInterval(this._intervalToken);
      this._intervalToken = null;
    }
  }

  start() {
    if (!this._intervalToken) {
      this._intervalToken = setInterval(this.tick.bind(this), 1000);
    }
  }

  reset() {
    this.timeRemaining = 10;
  }
}
