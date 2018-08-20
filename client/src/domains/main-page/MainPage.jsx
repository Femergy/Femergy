import React from 'react';
import { connect } from 'react-redux';
import MainHeader from '../../components/main-header/MainHeader';
import MainSignin from '../../components/main-signin/MainSignin';
import MainPageView from './MainPageView';
import MobileStub from '../../components/mobile-stub/MobileStub';
import { setReferer } from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
  setReferer: referer => dispatch(setReferer(referer)),
});

const MainPage = (props) => {
  if (props.match.params.id) {
    props.setReferer(props.match.params.id);
  }
  return (
    <MainPageView>
      <MainHeader />
      <MainSignin />
      <MobileStub />
    </MainPageView>
  );
};

export default connect(null, mapDispatchToProps)(MainPage);
