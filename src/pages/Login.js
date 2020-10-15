import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { LoginWrapper, LoginBox } from '../assets/styled';
import { selectLoginState } from '../store/selectors';
import { setLoginState } from '../store/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LoginWrapper state={this.props.loginState}>
        <LoginBox>
          <div className="formArea">
            <h4>React Persist Deneme</h4>
            <p>Login Sayfasına Hoşgeldiniz</p>
            <button onClick={() => this.props.setLoginState(false)}>Giriş Yap</button>
          </div>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => (
  (
    bindActionCreators({
      setLoginState,
    }, dispatch)
  )
);


export default connect(mapStateToProps, mapDispatchToProps)(Login);
