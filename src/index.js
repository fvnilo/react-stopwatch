import React from 'react';
import ReactDOM from 'react-dom';

import StopWatch from 'StopWatch';
import storeFactory from 'store';

let store = storeFactory();

ReactDOM.render(<StopWatch timer={store}/>, document.getElementById('root'));
