import {Link} from "react-router-dom";
import React from "react";
import dateGoodView from "../../../../addition-functions/dateGoodView";

function CommentElement({ comment }) {
  return (
    <div className='comment-container'>
      <CommentRate comment={comment} />
      <div className='comment-summary'>
        <div className='comment-text'>
          <p
            className='comment-body'
            dangerouslySetInnerHTML={{__html: comment?.body}}
          />
        </div>
        <div className='addition-comment-info'>
          <div>
            <p>commented: {dateGoodView(comment?.creation_date)}</p>
          </div>
          <div className='user-info'>
            <div className="user-details">
              <Link to={`/user/${comment?.owner?.user_id || ''}`}>
                {comment?.owner?.display_name}
              </Link>
              <div>
                <span className="reputation-score">
                  {comment?.owner?.reputation || '0'}
                </span>
              </div>
            </div>
            <div className="user-icon-block">
              <div className="avatar-wrapper-32">
                <Link to={`/user/${comment?.owner?.user_id || ''}`}>
                  <img
                    src={comment?.owner?.profile_image}
                    className="user-icon"
                    alt='profile'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentElement;