import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import Notifications from 'react-notify-toast';
import MainPage from '../main-page/MainPage';
import PageHome from '../page-home/PageHome';
import PageFeed from '../page-feed/PageFeed';
import PageTools from '../page-tools/PageTools';
import PageProfile from '../page-profile/PageProfile';
import PageEarn from '../page-earn/PageEarn';
import PageGroups from '../page-groups/PageGroups';
import ImportLnContactsWindow from '../import-ln-contacts-window/ImportLnContactsWindow';
import { constants } from '../../constants';
import PageLearn from '../page-learn/PageLearn';
import PageAccelerator from '../page-accelerator/PageAccelerator';
import PageCongress from '../page-congress/PageCongress';

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || `/${constants.HOME}`,
  allowRedirectBack: false,
  authenticatedSelector: state => !state.rootReducer.isAuthenticated,
  wrapperDisplayName: 'UserIsNotAuthenticated',
});

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: `/${constants.AUTH_PAGE}`,
  authenticatedSelector: state => state.rootReducer.isAuthenticated,
  wrapperDisplayName: 'UserIsAuthenticated',
});

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Notifications />
        {
          <React.Fragment>
            <Route exact path={`/${constants.AUTH_PAGE}/:id`} component={userIsNotAuthenticated(MainPage)} />
            <Route exact path={`/${constants.AUTH_PAGE}`} component={userIsNotAuthenticated(MainPage)} />
            <Route exact path={`/${constants.HOME}`} component={userIsAuthenticated(PageHome)} />
            <Route exact path={`/${constants.GROUPS}`} component={userIsAuthenticated(PageGroups)} />
            <Route exact path={`/${constants.FEED}`} component={userIsAuthenticated(PageFeed)} />
            <Route exact path={`/${constants.LEARN}`} component={userIsAuthenticated(PageLearn)} />
            <Route exact path={`/${constants.ACCELERATOR}`} component={userIsAuthenticated(PageAccelerator)} />
            <Route exact path={`/${constants.TOOLS}`} component={userIsAuthenticated(PageTools)} />
            <Route exact path={`/${constants.CONGRESS}`} component={userIsAuthenticated(PageCongress)} />
            <Route exact path={`/${constants.EARN}`} component={userIsAuthenticated(PageEarn)} />
            <Route exact path={`/${constants.IMPORT_LN_WINDOW}`} component={userIsAuthenticated(ImportLnContactsWindow)} />
            <Route exact path={`/${constants.PROFILE}`} component={userIsAuthenticated(PageProfile)} />
            <Route exact path="/" component={userIsNotAuthenticated(MainPage)} />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default withRouter(App);
