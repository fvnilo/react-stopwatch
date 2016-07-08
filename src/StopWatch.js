import React from 'react';

import { observer } from 'mobx-react';

const StopWatch = ({ timer }) => (<div>
    <h1>
      Time Remaining: { timer.timeRemaining }
    </h1>
     <button onClick={() => timer.start()}>Start</button>
     <button onClick={() => timer.stop()}>Stop</button>
     <button onClick={() => timer.reset()}>Reset</button>
  </div>);


export default observer(StopWatch);
