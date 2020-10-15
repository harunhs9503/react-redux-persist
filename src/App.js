import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './assets/styled';
import { selectLoginState } from './store/selectors';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Login />
        <Dashboard />
        <GlobalStyle />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => (
  (
    bindActionCreators({
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
