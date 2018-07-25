import React from 'react';
import { connect } from 'react-redux';
import FeedPageContentView from './FeedPageContentView';
import requestHelper from '../../helpers/requestHelper';
import { getPosts } from '../../actions/actions';

const mapStateToProps = state => (
  {
    user: state.rootReducer.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPosts: postList => dispatch(getPosts(postList)),
  }
);

class FeedPageContent extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  setPosts = (posts) => {
    this.setState({ posts });
  }

  getPosts = () => {
    requestHelper.getAuthorPosts({ authorId: this.props.user.id }, this.setPosts);
  }

  addPost = (text) => {
    requestHelper.addPost({ text }, this.getPosts);
  }

  deletePost = (postId) => {
    requestHelper.deletePost({ postId }, this.getPosts);
  }

  render() {
    return (
      <FeedPageContentView
        {...this.props}
        posts={this.state.posts}
        onPostDelete={this.deletePost}
        onPostAdd={this.addPost}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPageContent);
