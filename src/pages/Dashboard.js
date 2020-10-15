import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { DashboardWrapper, Dashbox } from '../assets/styled';
import { setLoginState } from '../store/actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <DashboardWrapper>
        <Dashbox>
          <div className="formArea">
            <h3>Dashboard Sayfasına Hoşgeldiniz</h3>
            <button onClick={() => this.props.setLoginState(true)}>Çıkış Yap</button>
          </div>
        </Dashbox>
      </DashboardWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => (
  (
    bindActionCreators({
      setLoginState,
    }, dispatch)
  )
);


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
