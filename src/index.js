import React from 'react';
import ReactDOM from 'react-dom';

import StopWatch from 'StopWatch';
import Store from 'store';

let store = new Store();

ReactDOM.render(<StopWatch timer={store}/>, document.getElementById('root'));
