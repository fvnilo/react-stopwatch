import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from 'actions';

import StopWatch from 'StopWatch';

const mapStateToProps = state => ({
  remainingTime: state.remainingTime,
  interval: state.interval
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(StopWatch);
