import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import PostView from './PostView';

class Post extends React.Component {
  state = {
    isMenuVisible: false,
    items: [
      {
        key: 'menu-item-delete',
        title: 'Delete',
        icon: '/images/close.svg',
        onClick: this.onDeleteClick.bind(this),
      },
    ],
  };

  onMenuClick = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  onDeleteClick(e) {
    e.preventDefault();
    this.onMenuClick();
    this.props.onDelete(this.props._id);
  }

  static get propTypes() {
    return {
      author: PropTypes.object,
      text: PropTypes.string,
      replies: PropTypes.number,
      shares: PropTypes.number,
      likes: PropTypes.number,
      comments: PropTypes.number,
      date: PropTypes.instanceOf(Date),
      onDelete: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      author: {},
      text: '',
      replies: 0,
      shares: 0,
      likes: 0,
      comments: 0,
      date: new Date(),
      onDelete: () => console.log('post delete'),
    };
  }

  render() {
    const date = moment(this.props.date).format('MMMM DD h:mm A');
    return (
      <PostView
        {...this.props}
        {...this.state}
        date={date}
        onMenuClick={this.onMenuClick}
      />
    );
  }
}

export default Post;
