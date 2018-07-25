import React from 'react';
import PostNewView from './PostNewView';
import { newPost } from '../../actions/actions';

class PostNew extends React.Component {
  state = {
    text: null,
  };

  textChange = (e) => {
    this.setState({ text: e.target.value });
  }

  addPost = (e) => {
    e.preventDefault();
    this.props.onPostAdd(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <PostNewView
        {...this.props}
        {...this.state}
        addPost={this.addPost}
        onTextChange={this.textChange}
      />
    );
  }
}

export default PostNew;
