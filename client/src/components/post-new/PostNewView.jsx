import React from 'react';
import './PostNew.scss';

const PostNewView = props => (
  <div className="post-new">
    <div className="post-new__smile" />
    <textarea className="post-new__textbox" cols="30" rows="4" placeholder="What's on your mind?" onChange={props.onTextChange} value={props.text} />
    <div className="post-new__controls--wrapper">
      <div className="post-new__post-types">
        <button>
          <img src="/images/photo.svg" alt="post_image" />
        </button>
        <button>
          <img src="/images/doc.svg" alt="post_document" />
        </button>
        <button>
          <img src="/images/video.svg" alt="post_video" />
        </button>
      </div>
      <button className="post-new__post--btn" onClick={props.addPost}>
        Post
      </button>
    </div>
  </div>
);

export default PostNewView;
