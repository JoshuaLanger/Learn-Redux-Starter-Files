import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function bindStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function bindDispatchToProps(dispatch) {
  return bindActionCreators(bindActionCreators, dispatch);
}

const App = connect(
  bindStateToProps,
  mapDispatchToProps
)(Main);

export default App;
