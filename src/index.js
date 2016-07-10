import React from 'react';
import ReactDOM from 'react-dom';

import StopWatch from 'StopWatch';
import storeFactory from 'store';

import { useStrict } from 'mobx';

let store = storeFactory();

useStrict(true);

ReactDOM.render(<StopWatch timer={store}/>, document.getElementById('root'));
