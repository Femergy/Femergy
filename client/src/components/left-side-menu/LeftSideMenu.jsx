import React from 'react';
import LeftSideMenuView from './LeftSideMenuView';

class LeftSideMenu extends React.Component {
  constructor(props) {
    super(props);
    const contentWidth = 1200;
    const windowWidth = window.innerWidth;
    this.state = {
      left: (windowWidth - contentWidth) / 2,
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
    const left = (windowWidth - contentWidth) / 2 < 0 ? 0 : (windowWidth - contentWidth) / 2;
    this.setState({ left });
  }

  render() {
    return (
      <LeftSideMenuView {...this.props} left={this.state.left} />
    );
  }
}

export default LeftSideMenu;
