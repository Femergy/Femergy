import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux'
import './Post.scss';
import config from '../../../config.json';
import DropMenu from '../drop-menu/DropMenu';

const mapStateToProps = state => ({
  userRole: state.rootReducer.user.role
});

const PostView = ({ author, text, comments, replies, shares, likes, date, isMenuVisible, onMenuClick, items, userRole }) => (
  <div className="post">
    <div className="post__upper">
      <div className="post__author">
        <div className="post__author-image-wrapper">
          { author.photo && <img className="post__author-image" src={`${config.api.uploaded}/${author.photo}`} alt="author face" /> }
        </div>
        <h3 className="post__author-name">{author.displayName}</h3>
        { author.isVerified && <img className="post__is-verified" src="/images/ic-check.svg" alt="is verified" /> }
      </div>
      <div className="post__date">{date}</div>
    </div>
    <div className="post__content">
      <p>{text}</p>
    </div>
    <div className={classNames("post__under", { hidden: author.role === 'admin' && userRole !== 'admin' })}>
      <div className="post__under__btn--wrapper">
        <button className="post__under__btn">
          <img src="/images/reply.svg" alt="reply" />
          {replies}
        </button>
        <button className="post__under__btn">
          <img src="/images/share.svg" alt="share" />
          {shares}
        </button>
        <button className="post__under__btn">
          <img src="/images/like.svg" alt="like" />
          {likes}
        </button>
        <button className="post__under__btn">
          <img src="/images/comment.svg" alt="comment" />
          {comments}
        </button>
      </div>
      <button className="post__under__more" onClick={onMenuClick}>
        <img src="/images/more.svg" alt="more button" />
      </button>
      {isMenuVisible && <DropMenu items={items} />}
    </div>
  </div>
);

export default connect(mapStateToProps)(PostView);
