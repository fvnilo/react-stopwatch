import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from 'store';
import StopWatchContainer from 'StopWatchContainer';

let store = createStore();

store.subscribe(() => {
  console.log(store);
});

ReactDOM.render(
  <Provider store={store}>
    <StopWatchContainer />
  </Provider>,
  document.getElementById('root'));
