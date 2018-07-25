import React from 'react';
import { withRouter } from 'react-router-dom';
import RightSideMenuView from './RightSideMenuView';

class RightSideMenu extends React.Component {
  constructor(props) {
    super(props);
    const contentWidth = 1200;
    const windowWidth = window.innerWidth;
    this.state = {
      right: (windowWidth - contentWidth) / 2,
    };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const contentWidth = 1200;
    const windowWidth = window.innerWidth;
    const right = (windowWidth - contentWidth) / 2 < 0 ? 0 : (windowWidth - contentWidth) / 2;
    this.setState({ right });
  }

  render() {
    return (
      <RightSideMenuView {...this.props} right={this.state.right} cards={this.props.cards} />
    );
  }
}

export default withRouter(RightSideMenu);
