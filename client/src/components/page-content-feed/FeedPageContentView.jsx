import React from 'react';
import './FeedPageContent.scss';
import PostNew from '../post-new/PostNew';
import Post from '../post/Post';

const FeedPageContentView = props => (
  <div className="feed">
    <PostNew onPostAdd={props.onPostAdd} />
    {
      props.posts && props.posts.map(post => (
        <Post
          {...post}
          onDelete={props.onPostDelete}
          key={post.postId}
        />
      ))
    }
  </div>
);

export default FeedPageContentView;
